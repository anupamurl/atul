"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromPromise");
require("rxjs/add/observable/defer");
require("rxjs/add/operator/mergeMap");
var AuthConfigConsts = (function () {
    function AuthConfigConsts() {
    }
    AuthConfigConsts.DEFAULT_TOKEN_NAME = 'token';
    AuthConfigConsts.DEFAULT_HEADER_NAME = 'Authorization';
    AuthConfigConsts.HEADER_PREFIX_BEARER = 'Bearer ';
    return AuthConfigConsts;
}());
exports.AuthConfigConsts = AuthConfigConsts;
var AuthConfigDefaults = {
    headerName: AuthConfigConsts.DEFAULT_HEADER_NAME,
    headerPrefix: null,
    tokenName: AuthConfigConsts.DEFAULT_TOKEN_NAME,
    tokenGetter: function () { return localStorage.getItem(AuthConfigDefaults.tokenName); },
    noJwtError: false,
    noClientCheck: false,
    globalHeaders: [],
    noTokenScheme: false
};
var AuthConfig = (function () {
    function AuthConfig(config) {
        config = config || {};
        this._config = objectAssign({}, AuthConfigDefaults, config);
        if (this._config.headerPrefix) {
            this._config.headerPrefix += ' ';
        }
        else if (this._config.noTokenScheme) {
            this._config.headerPrefix = '';
        }
        else {
            this._config.headerPrefix = AuthConfigConsts.HEADER_PREFIX_BEARER;
        }
        if (config.tokenName && !config.tokenGetter) {
            this._config.tokenGetter = function () { return localStorage.getItem(config.tokenName); };
        }
    }
    AuthConfig.prototype.getConfig = function () {
        return this._config;
    };
    return AuthConfig;
}());
exports.AuthConfig = AuthConfig;
var AuthHttpError = (function (_super) {
    __extends(AuthHttpError, _super);
    function AuthHttpError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuthHttpError;
}(Error));
exports.AuthHttpError = AuthHttpError;
var AuthHttp = (function () {
    function AuthHttp(options, http, defOpts) {
        var _this = this;
        this.http = http;
        this.defOpts = defOpts;
        this.config = options.getConfig();
        this.tokenStream = new Observable_1.Observable(function (obs) {
            obs.next(_this.config.tokenGetter());
        });
    }
    AuthHttp.prototype.mergeOptions = function (providedOpts, defaultOpts) {
        var newOptions = defaultOpts || new http_1.RequestOptions();
        if (this.config.globalHeaders) {
            this.setGlobalHeaders(this.config.globalHeaders, providedOpts);
        }
        newOptions = newOptions.merge(new http_1.RequestOptions(providedOpts));
        return newOptions;
    };
    AuthHttp.prototype.requestHelper = function (requestArgs, additionalOptions) {
        var options = new http_1.RequestOptions(requestArgs);
        if (additionalOptions) {
            options = options.merge(additionalOptions);
        }
        return this.request(new http_1.Request(this.mergeOptions(options, this.defOpts)));
    };
    AuthHttp.prototype.requestWithToken = function (req, token) {
        if (!this.config.noClientCheck && !tokenNotExpired(undefined, token)) {
            if (!this.config.noJwtError) {
                return new Observable_1.Observable(function (obs) {
                    obs.error(new AuthHttpError('No JWT present or has expired'));
                });
            }
        }
        else {
            req.headers.set(this.config.headerName, this.config.headerPrefix + token);
        }
        return this.http.request(req);
    };
    AuthHttp.prototype.setGlobalHeaders = function (headers, request) {
        if (!request.headers) {
            request.headers = new http_1.Headers();
        }
        headers.forEach(function (header) {
            var key = Object.keys(header)[0];
            var headerValue = header[key];
            request.headers.set(key, headerValue);
        });
    };
    AuthHttp.prototype.request = function (url, options) {
        var _this = this;
        if (typeof url === 'string') {
            return this.get(url, options);
        }
        var req = url;
        return Observable_1.Observable.defer(function () {
            var token = _this.config.tokenGetter();
            if (token instanceof Promise) {
                return Observable_1.Observable.fromPromise(token).mergeMap(function (jwtToken) { return _this.requestWithToken(req, jwtToken); });
            }
            else {
                return _this.requestWithToken(req, token);
            }
        });
    };
    AuthHttp.prototype.get = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Get, url: url }, options);
    };
    AuthHttp.prototype.post = function (url, body, options) {
        return this.requestHelper({ body: body, method: http_1.RequestMethod.Post, url: url }, options);
    };
    AuthHttp.prototype.put = function (url, body, options) {
        return this.requestHelper({ body: body, method: http_1.RequestMethod.Put, url: url }, options);
    };
    AuthHttp.prototype.delete = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Delete, url: url }, options);
    };
    AuthHttp.prototype.patch = function (url, body, options) {
        return this.requestHelper({ body: body, method: http_1.RequestMethod.Patch, url: url }, options);
    };
    AuthHttp.prototype.head = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Head, url: url }, options);
    };
    AuthHttp.prototype.options = function (url, options) {
        return this.requestHelper({ body: '', method: http_1.RequestMethod.Options, url: url }, options);
    };
    AuthHttp = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [AuthConfig, http_1.Http, http_1.RequestOptions])
    ], AuthHttp);
    return AuthHttp;
}());
exports.AuthHttp = AuthHttp;
var JwtHelper = (function () {
    function JwtHelper() {
    }
    JwtHelper.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw 'Illegal base64url string!';
            }
        }
        return this.b64DecodeUnicode(output);
    };
    JwtHelper.prototype.b64decode = function (str) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var output = '';
        str = String(str).replace(/=+$/, '');
        if (str.length % 4 == 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (var bc = 0, bs = void 0, buffer = void 0, idx = 0; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
            bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = chars.indexOf(buffer);
        }
        return output;
    };
    JwtHelper.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map.call(this.b64decode(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    };
    JwtHelper.prototype.decodeToken = function (token) {
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('JWT must have 3 parts');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token');
        }
        return JSON.parse(decoded);
    };
    JwtHelper.prototype.getTokenExpirationDate = function (token) {
        var decoded;
        decoded = this.decodeToken(token);
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    JwtHelper.prototype.isTokenExpired = function (token, offsetSeconds) {
        var date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date == null) {
            return false;
        }
        return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };
    return JwtHelper;
}());
exports.JwtHelper = JwtHelper;
function tokenNotExpired(tokenName, jwt) {
    if (tokenName === void 0) { tokenName = AuthConfigConsts.DEFAULT_TOKEN_NAME; }
    var token = jwt || localStorage.getItem(tokenName);
    var jwtHelper = new JwtHelper();
    return token != null && !jwtHelper.isTokenExpired(token);
}
exports.tokenNotExpired = tokenNotExpired;
exports.AUTH_PROVIDERS = [
    {
        provide: AuthHttp,
        deps: [http_1.Http, http_1.RequestOptions],
        useFactory: function (http, options) {
            return new AuthHttp(new AuthConfig(), http, options);
        }
    }
];
function provideAuth(config) {
    return [
        {
            provide: AuthHttp,
            deps: [http_1.Http, http_1.RequestOptions],
            useFactory: function (http, options) {
                return new AuthHttp(new AuthConfig(config), http, options);
            }
        }
    ];
}
exports.provideAuth = provideAuth;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function objectAssign(target) {
    var source = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        source[_i - 1] = arguments[_i];
    }
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 0; s < source.length; s++) {
        from = Object(source[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (Object.getOwnPropertySymbols) {
            symbols = Object.getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
}
var AuthModule = (function () {
    function AuthModule(parentModule) {
        if (parentModule) {
            throw new Error('AuthModule is already loaded. Import it in the AppModule only');
        }
    }
    AuthModule_1 = AuthModule;
    AuthModule.forRoot = function (config) {
        return {
            ngModule: AuthModule_1,
            providers: [
                { provide: AuthConfig, useValue: config }
            ]
        };
    };
    AuthModule = AuthModule_1 = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule],
            providers: [AuthHttp, JwtHelper]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __metadata("design:paramtypes", [AuthModule])
    ], AuthModule);
    return AuthModule;
    var AuthModule_1;
}());
exports.AuthModule = AuthModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LGVBQVEsRUFBRSxDQUFBO3lDQUFlLFVBQVU7T0FEakQsVUFBVSxDQWdCdEI7SUFBRCxpQkFBQzs7Q0FoQkQsQUFnQkMsSUFBQTtBQWhCWSxnQ0FBVSIsImZpbGUiOiJhcHAvand0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEh0dHAsXHJcbiAgICBIZWFkZXJzLFxyXG4gICAgUmVxdWVzdCxcclxuICAgIFJlcXVlc3RPcHRpb25zLFxyXG4gICAgUmVxdWVzdE9wdGlvbnNBcmdzLFxyXG4gICAgUmVxdWVzdE1ldGhvZCxcclxuICAgIFJlc3BvbnNlLFxyXG4gICAgSHR0cE1vZHVsZVxyXG59IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZSwgUHJvdmlkZXIsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIE1vZHVsZVdpdGhQcm92aWRlcnN9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29ic2VydmFibGUvZGVmZXJcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUF1dGhDb25maWcge1xyXG4gIGdsb2JhbEhlYWRlcnM6IEFycmF5PE9iamVjdD47XHJcbiAgaGVhZGVyTmFtZTogc3RyaW5nO1xyXG4gIGhlYWRlclByZWZpeDogc3RyaW5nO1xyXG4gIG5vSnd0RXJyb3I6IGJvb2xlYW47XHJcbiAgbm9DbGllbnRDaGVjazogYm9vbGVhbjtcclxuICBub1Rva2VuU2NoZW1lPzogYm9vbGVhbjtcclxuICB0b2tlbkdldHRlcjogKCkgPT4gc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+O1xyXG4gIHRva2VuTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBdXRoQ29uZmlnT3B0aW9uYWwge1xyXG4gICAgaGVhZGVyTmFtZT86IHN0cmluZztcclxuICAgIGhlYWRlclByZWZpeD86IHN0cmluZztcclxuICAgIHRva2VuTmFtZT86IHN0cmluZztcclxuICAgIHRva2VuR2V0dGVyPzogKCkgPT4gc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+O1xyXG4gICAgbm9Kd3RFcnJvcj86IGJvb2xlYW47XHJcbiAgICBub0NsaWVudENoZWNrPzogYm9vbGVhbjtcclxuICAgIGdsb2JhbEhlYWRlcnM/OiBBcnJheTxPYmplY3Q+O1xyXG4gICAgbm9Ub2tlblNjaGVtZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoQ29uZmlnQ29uc3RzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9UT0tFTl9OQU1FID0gJ3Rva2VuJztcclxuICAgIHB1YmxpYyBzdGF0aWMgREVGQVVMVF9IRUFERVJfTkFNRSA9ICdBdXRob3JpemF0aW9uJztcclxuICAgIHB1YmxpYyBzdGF0aWMgSEVBREVSX1BSRUZJWF9CRUFSRVIgPSAnQmVhcmVyICc7XHJcbn1cclxuXHJcbmNvbnN0IEF1dGhDb25maWdEZWZhdWx0czogSUF1dGhDb25maWcgPSB7XHJcbiAgICBoZWFkZXJOYW1lOiBBdXRoQ29uZmlnQ29uc3RzLkRFRkFVTFRfSEVBREVSX05BTUUsXHJcbiAgICBoZWFkZXJQcmVmaXg6IG51bGwsXHJcbiAgICB0b2tlbk5hbWU6IEF1dGhDb25maWdDb25zdHMuREVGQVVMVF9UT0tFTl9OQU1FLFxyXG4gICAgdG9rZW5HZXR0ZXI6ICgpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEF1dGhDb25maWdEZWZhdWx0cy50b2tlbk5hbWUpIGFzIHN0cmluZyxcclxuICAgIG5vSnd0RXJyb3I6IGZhbHNlLFxyXG4gICAgbm9DbGllbnRDaGVjazogZmFsc2UsXHJcbiAgICBnbG9iYWxIZWFkZXJzOiBbXSxcclxuICAgIG5vVG9rZW5TY2hlbWU6IGZhbHNlXHJcbn07XHJcblxyXG4vKipcclxuICogU2V0cyB1cCB0aGUgYXV0aGVudGljYXRpb24gY29uZmlndXJhdGlvbi5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aENvbmZpZyB7XHJcblxyXG4gIHByaXZhdGUgX2NvbmZpZzogSUF1dGhDb25maWc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZz86IElBdXRoQ29uZmlnT3B0aW9uYWwpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIHRoaXMuX2NvbmZpZyA9IG9iamVjdEFzc2lnbih7fSwgQXV0aENvbmZpZ0RlZmF1bHRzLCBjb25maWcpO1xyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5oZWFkZXJQcmVmaXgpIHtcclxuICAgICAgdGhpcy5fY29uZmlnLmhlYWRlclByZWZpeCArPSAnICc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2NvbmZpZy5ub1Rva2VuU2NoZW1lKSB7XHJcbiAgICAgIHRoaXMuX2NvbmZpZy5oZWFkZXJQcmVmaXggPSAnJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbmZpZy5oZWFkZXJQcmVmaXggPSBBdXRoQ29uZmlnQ29uc3RzLkhFQURFUl9QUkVGSVhfQkVBUkVSO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb25maWcudG9rZW5OYW1lICYmICFjb25maWcudG9rZW5HZXR0ZXIpIHtcclxuICAgICAgdGhpcy5fY29uZmlnLnRva2VuR2V0dGVyID0gKCkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oY29uZmlnLnRva2VuTmFtZSkgYXMgc3RyaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldENvbmZpZygpOklBdXRoQ29uZmlnIHtcclxuICAgIHJldHVybiB0aGlzLl9jb25maWc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhIdHRwRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbGxvd3MgZm9yIGV4cGxpY2l0IGF1dGhlbnRpY2F0ZWQgSFRUUCByZXF1ZXN0cy5cclxuICovXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoSHR0cCB7XHJcblxyXG4gIHByaXZhdGUgY29uZmlnOiBJQXV0aENvbmZpZztcclxuICBwdWJsaWMgdG9rZW5TdHJlYW06IE9ic2VydmFibGU8c3RyaW5nPjtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogQXV0aENvbmZpZywgcHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGRlZk9wdHM/OiBSZXF1ZXN0T3B0aW9ucykge1xyXG4gICAgdGhpcy5jb25maWcgPSBvcHRpb25zLmdldENvbmZpZygpO1xyXG5cclxuICAgIHRoaXMudG9rZW5TdHJlYW0gPSBuZXcgT2JzZXJ2YWJsZTxzdHJpbmc+KChvYnM6IGFueSkgPT4ge1xyXG4gICAgICBvYnMubmV4dCh0aGlzLmNvbmZpZy50b2tlbkdldHRlcigpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtZXJnZU9wdGlvbnMocHJvdmlkZWRPcHRzOiBSZXF1ZXN0T3B0aW9uc0FyZ3MsIGRlZmF1bHRPcHRzPzogUmVxdWVzdE9wdGlvbnMpIHtcclxuICAgIGxldCBuZXdPcHRpb25zID0gZGVmYXVsdE9wdHMgfHwgbmV3IFJlcXVlc3RPcHRpb25zKCk7XHJcbiAgICBpZiAodGhpcy5jb25maWcuZ2xvYmFsSGVhZGVycykge1xyXG4gICAgICB0aGlzLnNldEdsb2JhbEhlYWRlcnModGhpcy5jb25maWcuZ2xvYmFsSGVhZGVycywgcHJvdmlkZWRPcHRzKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXdPcHRpb25zID0gbmV3T3B0aW9ucy5tZXJnZShuZXcgUmVxdWVzdE9wdGlvbnMocHJvdmlkZWRPcHRzKSk7XHJcblxyXG4gICAgcmV0dXJuIG5ld09wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlcXVlc3RIZWxwZXIocmVxdWVzdEFyZ3M6IFJlcXVlc3RPcHRpb25zQXJncywgYWRkaXRpb25hbE9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyhyZXF1ZXN0QXJncyk7XHJcbiAgICBpZiAoYWRkaXRpb25hbE9wdGlvbnMpIHtcclxuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMubWVyZ2UoYWRkaXRpb25hbE9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChuZXcgUmVxdWVzdCh0aGlzLm1lcmdlT3B0aW9ucyhvcHRpb25zLCB0aGlzLmRlZk9wdHMpKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVxdWVzdFdpdGhUb2tlbihyZXE6IFJlcXVlc3QsIHRva2VuOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICBpZiAoIXRoaXMuY29uZmlnLm5vQ2xpZW50Q2hlY2sgJiYgIXRva2VuTm90RXhwaXJlZCh1bmRlZmluZWQsIHRva2VuKSkge1xyXG4gICAgICBpZiAoIXRoaXMuY29uZmlnLm5vSnd0RXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8UmVzcG9uc2U+KChvYnM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgb2JzLmVycm9yKG5ldyBBdXRoSHR0cEVycm9yKCdObyBKV1QgcHJlc2VudCBvciBoYXMgZXhwaXJlZCcpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVxLmhlYWRlcnMuc2V0KHRoaXMuY29uZmlnLmhlYWRlck5hbWUsIHRoaXMuY29uZmlnLmhlYWRlclByZWZpeCArIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QocmVxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRHbG9iYWxIZWFkZXJzKGhlYWRlcnM6IEFycmF5PE9iamVjdD4sIHJlcXVlc3Q6IFJlcXVlc3QgfCBSZXF1ZXN0T3B0aW9uc0FyZ3MpIHtcclxuICAgIGlmICghcmVxdWVzdC5oZWFkZXJzKSB7XHJcbiAgICAgIHJlcXVlc3QuaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICB9XHJcbiAgICBoZWFkZXJzLmZvckVhY2goKGhlYWRlcjogT2JqZWN0KSA9PiB7XHJcbiAgICAgIGxldCBrZXk6IHN0cmluZyA9IE9iamVjdC5rZXlzKGhlYWRlcilbMF07XHJcbiAgICAgIGxldCBoZWFkZXJWYWx1ZTogc3RyaW5nID0gKGhlYWRlciBhcyBhbnkpW2tleV07XHJcbiAgICAgIChyZXF1ZXN0LmhlYWRlcnMgYXMgSGVhZGVycykuc2V0KGtleSwgaGVhZGVyVmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVxdWVzdCh1cmw6IHN0cmluZyB8IFJlcXVlc3QsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0KHVybCwgb3B0aW9ucyk7IC8vIFJlY3Vyc2lvbjogdHJhbnNmb3JtIHVybCBmcm9tIFN0cmluZyB0byBSZXF1ZXN0XHJcbiAgICB9XHJcbiAgICAvLyBlbHNlIGlmICggISB1cmwgaW5zdGFuY2VvZiBSZXF1ZXN0ICkge1xyXG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSB1cmwgc3RyaW5nIG9yIFJlcXVlc3QgaW5zdGFuY2UuJyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZnJvbSB0aGlzIHBvaW50IHVybCBpcyBhbHdheXMgYW4gaW5zdGFuY2Ugb2YgUmVxdWVzdDtcclxuICAgIGxldCByZXE6IFJlcXVlc3QgPSB1cmwgYXMgUmVxdWVzdDtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBjb2xkIG9ic2VydmFibGUgYW5kIGxvYWQgdGhlIHRva2VuIGp1c3QgaW4gdGltZVxyXG4gICAgcmV0dXJuIE9ic2VydmFibGUuZGVmZXIoKCkgPT4ge1xyXG4gICAgICBsZXQgdG9rZW46IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiA9IHRoaXMuY29uZmlnLnRva2VuR2V0dGVyKCk7XHJcbiAgICAgIGlmICh0b2tlbiBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5mcm9tUHJvbWlzZSh0b2tlbikubWVyZ2VNYXAoKGp3dFRva2VuOiBzdHJpbmcpID0+IHRoaXMucmVxdWVzdFdpdGhUb2tlbihyZXEsIGp3dFRva2VuKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdFdpdGhUb2tlbihyZXEsIHRva2VuKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0KHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdEhlbHBlcih7IGJvZHk6ICcnLCBtZXRob2Q6IFJlcXVlc3RNZXRob2QuR2V0LCB1cmw6IHVybCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBhbnksIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVscGVyKHsgYm9keTogYm9keSwgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLlBvc3QsIHVybDogdXJsIH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHB1dCh1cmw6IHN0cmluZywgYm9keTogYW55LCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdEhlbHBlcih7IGJvZHk6IGJvZHksIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5QdXQsIHVybDogdXJsIH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlbGV0ZSh1cmw6IHN0cmluZywgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3RIZWxwZXIoeyBib2R5OiAnJywgbWV0aG9kOiBSZXF1ZXN0TWV0aG9kLkRlbGV0ZSwgdXJsOiB1cmwgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcGF0Y2godXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgb3B0aW9ucz86IFJlcXVlc3RPcHRpb25zQXJncyk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3RIZWxwZXIoeyBib2R5OiBib2R5LCBtZXRob2Q6IFJlcXVlc3RNZXRob2QuUGF0Y2gsIHVybDogdXJsIH0sIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhlYWQodXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBSZXF1ZXN0T3B0aW9uc0FyZ3MpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0SGVscGVyKHsgYm9keTogJycsIG1ldGhvZDogUmVxdWVzdE1ldGhvZC5IZWFkLCB1cmw6IHVybCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvcHRpb25zKHVybDogc3RyaW5nLCBvcHRpb25zPzogUmVxdWVzdE9wdGlvbnNBcmdzKTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdEhlbHBlcih7IGJvZHk6ICcnLCBtZXRob2Q6IFJlcXVlc3RNZXRob2QuT3B0aW9ucywgdXJsOiB1cmwgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBjbGFzcyB0byBkZWNvZGUgYW5kIGZpbmQgSldUIGV4cGlyYXRpb24uXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEp3dEhlbHBlciB7XHJcblxyXG4gIHB1YmxpYyB1cmxCYXNlNjREZWNvZGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IG91dHB1dCA9IHN0ci5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xyXG4gICAgc3dpdGNoIChvdXRwdXQubGVuZ3RoICUgNCkge1xyXG4gICAgICBjYXNlIDA6IHsgYnJlYWs7IH1cclxuICAgICAgY2FzZSAyOiB7IG91dHB1dCArPSAnPT0nOyBicmVhazsgfVxyXG4gICAgICBjYXNlIDM6IHsgb3V0cHV0ICs9ICc9JzsgYnJlYWs7IH1cclxuICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgIHRocm93ICdJbGxlZ2FsIGJhc2U2NHVybCBzdHJpbmchJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuYjY0RGVjb2RlVW5pY29kZShvdXRwdXQpO1xyXG4gIH1cclxuXHJcbiAgLy8gY3JlZGl0cyBmb3IgZGVjb2RlciBnb2VzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9hdGtcclxuICBwcml2YXRlIGI2NGRlY29kZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xyXG4gICAgbGV0IG91dHB1dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgc3RyID0gU3RyaW5nKHN0cikucmVwbGFjZSgvPSskLywgJycpO1xyXG5cclxuICAgIGlmIChzdHIubGVuZ3RoICUgNCA9PSAxKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoXHJcbiAgICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyc1xyXG4gICAgICBsZXQgYmM6IG51bWJlciA9IDAsIGJzOiBhbnksIGJ1ZmZlcjogYW55LCBpZHg6IG51bWJlciA9IDA7XHJcbiAgICAgIC8vIGdldCBuZXh0IGNoYXJhY3RlclxyXG4gICAgICBidWZmZXIgPSBzdHIuY2hhckF0KGlkeCsrKTtcclxuICAgICAgLy8gY2hhcmFjdGVyIGZvdW5kIGluIHRhYmxlPyBpbml0aWFsaXplIGJpdCBzdG9yYWdlIGFuZCBhZGQgaXRzIGFzY2lpIHZhbHVlO1xyXG4gICAgICB+YnVmZmVyICYmIChicyA9IGJjICUgNCA/IGJzICogNjQgKyBidWZmZXIgOiBidWZmZXIsXHJcbiAgICAgICAgLy8gYW5kIGlmIG5vdCBmaXJzdCBvZiBlYWNoIDQgY2hhcmFjdGVycyxcclxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gb25lIGFzY2lpIGNoYXJhY3RlclxyXG4gICAgICAgIGJjKysgJSA0KSA/IG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSAmIGJzID4+ICgtMiAqIGJjICYgNikpIDogMFxyXG4gICAgKSB7XHJcbiAgICAgIC8vIHRyeSB0byBmaW5kIGNoYXJhY3RlciBpbiB0YWJsZSAoMC02Mywgbm90IGZvdW5kID0+IC0xKVxyXG4gICAgICBidWZmZXIgPSBjaGFycy5pbmRleE9mKGJ1ZmZlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxuXHJcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvQVBJL1dpbmRvd0Jhc2U2NC9CYXNlNjRfZW5jb2RpbmdfYW5kX2RlY29kaW5nI1RoZV9Vbmljb2RlX1Byb2JsZW1cclxuICBwcml2YXRlIGI2NERlY29kZVVuaWNvZGUoc3RyOiBhbnkpIHtcclxuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKHRoaXMuYjY0ZGVjb2RlKHN0ciksIChjOiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuICclJyArICgnMDAnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xyXG4gICAgfSkuam9pbignJykpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlY29kZVRva2VuKHRva2VuOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgbGV0IHBhcnRzID0gdG9rZW4uc3BsaXQoJy4nKTtcclxuXHJcbiAgICBpZiAocGFydHMubGVuZ3RoICE9PSAzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSldUIG11c3QgaGF2ZSAzIHBhcnRzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGRlY29kZWQgPSB0aGlzLnVybEJhc2U2NERlY29kZShwYXJ0c1sxXSk7XHJcbiAgICBpZiAoIWRlY29kZWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZGVjb2RlIHRoZSB0b2tlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFRva2VuRXhwaXJhdGlvbkRhdGUodG9rZW46IHN0cmluZyk6IERhdGUge1xyXG4gICAgbGV0IGRlY29kZWQ6IGFueTtcclxuICAgIGRlY29kZWQgPSB0aGlzLmRlY29kZVRva2VuKHRva2VuKTtcclxuXHJcbiAgICBpZiAoIWRlY29kZWQuaGFzT3duUHJvcGVydHkoJ2V4cCcpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoMCk7IC8vIFRoZSAwIGhlcmUgaXMgdGhlIGtleSwgd2hpY2ggc2V0cyB0aGUgZGF0ZSB0byB0aGUgZXBvY2hcclxuICAgIGRhdGUuc2V0VVRDU2Vjb25kcyhkZWNvZGVkLmV4cCk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNUb2tlbkV4cGlyZWQodG9rZW46IHN0cmluZywgb2Zmc2V0U2Vjb25kcz86IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGRhdGUgPSB0aGlzLmdldFRva2VuRXhwaXJhdGlvbkRhdGUodG9rZW4pO1xyXG4gICAgb2Zmc2V0U2Vjb25kcyA9IG9mZnNldFNlY29uZHMgfHwgMDtcclxuXHJcbiAgICBpZiAoZGF0ZSA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUb2tlbiBleHBpcmVkP1xyXG4gICAgcmV0dXJuICEoZGF0ZS52YWx1ZU9mKCkgPiAobmV3IERhdGUoKS52YWx1ZU9mKCkgKyAob2Zmc2V0U2Vjb25kcyAqIDEwMDApKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGZvciBwcmVzZW5jZSBvZiB0b2tlbiBhbmQgdGhhdCB0b2tlbiBoYXNuJ3QgZXhwaXJlZC5cclxuICogRm9yIHVzZSB3aXRoIHRoZSBAQ2FuQWN0aXZhdGUgcm91dGVyIGRlY29yYXRvciBhbmQgTmdJZlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuTm90RXhwaXJlZCh0b2tlbk5hbWUgPSBBdXRoQ29uZmlnQ29uc3RzLkRFRkFVTFRfVE9LRU5fTkFNRSwgand0PzpzdHJpbmcpOiBib29sZWFuIHtcclxuXHJcbiAgY29uc3QgdG9rZW46IHN0cmluZyA9IGp3dCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0b2tlbk5hbWUpO1xyXG5cclxuICBjb25zdCBqd3RIZWxwZXIgPSBuZXcgSnd0SGVscGVyKCk7XHJcblxyXG4gIHJldHVybiB0b2tlbiAhPSBudWxsICYmICFqd3RIZWxwZXIuaXNUb2tlbkV4cGlyZWQodG9rZW4pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSF9QUk9WSURFUlM6IFByb3ZpZGVyW10gPSBbXHJcbiAge1xyXG4gICAgcHJvdmlkZTogQXV0aEh0dHAsXHJcbiAgICBkZXBzOiBbSHR0cCwgUmVxdWVzdE9wdGlvbnNdLFxyXG4gICAgdXNlRmFjdG9yeTogKGh0dHA6IEh0dHAsIG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgQXV0aEh0dHAobmV3IEF1dGhDb25maWcoKSwgaHR0cCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVBdXRoKGNvbmZpZz86IElBdXRoQ29uZmlnT3B0aW9uYWwpOiBQcm92aWRlcltdIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBBdXRoSHR0cCxcclxuICAgICAgZGVwczogW0h0dHAsIFJlcXVlc3RPcHRpb25zXSxcclxuICAgICAgdXNlRmFjdG9yeTogKGh0dHA6IEh0dHAsIG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBdXRoSHR0cChuZXcgQXV0aENvbmZpZyhjb25maWcpLCBodHRwLCBvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF07XHJcbn1cclxuXHJcbmxldCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcbmxldCBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcclxuXHJcbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbDogYW55KSB7XHJcbiAgaWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIE9iamVjdCh2YWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvYmplY3RBc3NpZ24odGFyZ2V0OiBhbnksIC4uLnNvdXJjZTogYW55W10pIHtcclxuICBsZXQgZnJvbTogYW55O1xyXG4gIGxldCB0byA9IHRvT2JqZWN0KHRhcmdldCk7XHJcbiAgbGV0IHN5bWJvbHM6IGFueTtcclxuICBcclxuICBmb3IgKHZhciBzID0gMDsgcyA8IHNvdXJjZS5sZW5ndGg7IHMrKykge1xyXG4gICAgZnJvbSA9IE9iamVjdChzb3VyY2Vbc10pO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xyXG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XHJcbiAgICAgICAgdG9ba2V5XSA9IGZyb21ba2V5XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoKDxhbnk+T2JqZWN0KS5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcclxuICAgICAgc3ltYm9scyA9ICg8YW55Pk9iamVjdCkuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XHJcbiAgICAgICAgICB0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0bztcclxufVxyXG4vKipcclxuICogTW9kdWxlIGZvciBhbmd1bGFyMi1qd3RcclxuICogQGV4cGVyaW1lbnRhbFxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbSHR0cE1vZHVsZV0sXHJcbiAgcHJvdmlkZXJzOiBbQXV0aEh0dHAsIEp3dEhlbHBlcl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQXV0aE1vZHVsZSkge1xyXG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAnQXV0aE1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBBdXRoQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQXV0aE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAge3Byb3ZpZGU6IEF1dGhDb25maWcsIHVzZVZhbHVlOiBjb25maWd9XHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==
