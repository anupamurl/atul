"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var index_1 = require("../jwt/index");
var router_1 = require("@angular/router");
var HiddenDirective = (function () {
    function HiddenDirective(el, renderer, fb, authHttp, router) {
        this.fb = fb;
        this.authHttp = authHttp;
        this.router = router;
    }
    HiddenDirective.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    };
    HiddenDirective = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '[myHidden]',
            templateUrl: 'leftnavi.html'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer, forms_1.FormBuilder, index_1.AuthHttp, router_1.Router])
    ], HiddenDirective);
    return HiddenDirective;
}());
exports.HiddenDirective = HiddenDirective;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaGlkZGVuLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFxRjtBQUdyRix3Q0FBeUQ7QUFDekQsc0NBQTBDO0FBQzFDLDBDQUF5QztBQWN6QztJQUNJLHlCQUFZLEVBQWMsRUFBRSxRQUFrQixFQUFXLEVBQWUsRUFBYSxRQUFvQixFQUFXLE1BQWU7UUFBMUUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFhLGFBQVEsR0FBUixRQUFRLENBQVk7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFTO0lBRW5JLENBQUM7SUFHRCxnQ0FBTSxHQUFOO1FBS0ksWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUksQ0FBQTtRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFJcEMsQ0FBQztJQWhCUSxlQUFlO1FBVjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFFLGVBQWU7U0FDN0IsQ0FBQzt5Q0FPZ0IsaUJBQVUsRUFBWSxlQUFRLEVBQWUsbUJBQVcsRUFBeUIsZ0JBQVEsRUFBb0IsZUFBTTtPQUQxSCxlQUFlLENBbUIzQjtJQUFELHNCQUFDO0NBbkJELEFBbUJDLElBQUE7QUFuQlksMENBQWUiLCJmaWxlIjoiYXBwL3NoYXJlZC9oaWRkZW4uZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlciAsIENvbXBvbmVudCAsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuIFxyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgIEF1dGhIdHRwICB9IGZyb20gJy4uL2p3dC9pbmRleCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG4vLyBEaXJlY3RpdmUgZGVjb3JhdG9yXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ1tteUhpZGRlbl0nICxcclxuICAgIHRlbXBsYXRlVXJsOiAnbGVmdG5hdmkuaHRtbCcgXHJcbiAgfSlcclxuIFxyXG5cclxuXHJcbi8vIEBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tteUhpZGRlbl0nIH0pXHJcbi8vIERpcmVjdGl2ZSBjbGFzc1xyXG5leHBvcnQgY2xhc3MgSGlkZGVuRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIsICBwdWJsaWMgIGZiOiBGb3JtQnVpbGRlciAgICwgcHJpdmF0ZSBhdXRoSHR0cCAgOiBBdXRoSHR0cCAsIHByaXZhdGUgcm91dGVyIDogUm91dGVyICkge1xyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2dvdXQoKXsgXHJcblxyXG4gICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nICAgKVxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XHJcbiAgICAgXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG59Il19
