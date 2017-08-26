"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routers_1 = require("./app.routers");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var about_module_1 = require("./about/about.module");
var login_module_1 = require("./login/login.module");
var addskill_module_1 = require("./addskill/addskill.module");
var demo_app_module_1 = require("./material/demo-app/demo-app-module");
var flex_layout_1 = require("@angular/flex-layout");
var index_1 = require("./jwt/index");
var auth_service_1 = require("./jwt/auth.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                material_1.MaterialModule,
                flex_layout_1.FlexLayoutModule,
                about_module_1.AboutModule,
                demo_app_module_1.DemoAppModule,
                app_routers_1.routing,
                index_1.AuthModule,
                login_module_1.LoginModule,
                addskill_module_1.AddskillModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                index_1.AuthHttp,
                auth_service_1.AuthGuard,
                auth_service_1.AuthNotGuard,
                index_1.provideAuth({
                    headerName: 'Authorization',
                    headerPrefix: 'bearer',
                    tokenName: 'token',
                    tokenGetter: (function () { return localStorage.getItem('id_token'); }),
                    globalHeaders: [{ 'Content-Type': 'application/json' }],
                    noJwtError: true
                })
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUMxRCw2Q0FBd0M7QUFFeEMsaURBQStDO0FBQy9DLHdDQUFrRTtBQUNsRSxzQ0FBMkM7QUFDM0MsOENBQW1EO0FBQ25ELHFEQUFtRDtBQUNuRCxxREFBbUQ7QUFDbkQsOERBQTREO0FBQzVELHVFQUFvRTtBQUNwRSxvREFBd0Q7QUFDeEQscUNBQTRGO0FBQzVGLG1EQUE2RDtBQXFDN0Q7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQWpDckIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGdDQUFhO2dCQUNiLG1CQUFXO2dCQUNYLDJCQUFtQjtnQkFDbkIsaUJBQVU7Z0JBQ1YseUJBQWM7Z0JBQ2QsOEJBQWdCO2dCQUNoQiwwQkFBVztnQkFDWCwrQkFBYTtnQkFDYixxQkFBTztnQkFDUCxrQkFBVTtnQkFDViwwQkFBVztnQkFDWCxnQ0FBYzthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2FBQ2I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsZ0JBQVE7Z0JBQ1Isd0JBQVM7Z0JBQ1QsMkJBQVk7Z0JBQ1osbUJBQVcsQ0FBQztvQkFDVixVQUFVLEVBQUUsZUFBZTtvQkFDM0IsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLFNBQVMsRUFBRSxPQUFPO29CQUNsQixXQUFXLEVBQUUsQ0FBQyxjQUFNLE9BQUEsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztvQkFDckQsYUFBYSxFQUFFLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztvQkFDdkQsVUFBVSxFQUFFLElBQUk7aUJBQ2pCLENBQUM7YUFDSDtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDMUIsQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQTFCLEFBQTBCLElBQUE7QUFBYiw4QkFBUyIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgcm91dGluZyB9IGZyb20gJy4vYXBwLnJvdXRlcnMnO1xyXG4gXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBBYm91dE1vZHVsZSB9IGZyb20gJy4vYWJvdXQvYWJvdXQubW9kdWxlJztcclxuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuL2xvZ2luL2xvZ2luLm1vZHVsZSc7IFxyXG5pbXBvcnQgeyBBZGRza2lsbE1vZHVsZSB9IGZyb20gJy4vYWRkc2tpbGwvYWRkc2tpbGwubW9kdWxlJzsgXHJcbmltcG9ydCB7IERlbW9BcHBNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsL2RlbW8tYXBwL2RlbW8tYXBwLW1vZHVsZSc7XHJcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7ICBcclxuaW1wb3J0IHsgQXV0aEh0dHAsIEF1dGhDb25maWcsIEFVVEhfUFJPVklERVJTLCBwcm92aWRlQXV0aCwgQXV0aE1vZHVsZSB9IGZyb20gJy4vand0L2luZGV4JzsgXHJcbmltcG9ydCB7IEF1dGhHdWFyZCwgQXV0aE5vdEd1YXJkIH0gZnJvbSAnLi9qd3QvYXV0aC5zZXJ2aWNlJzsgIFxyXG4gXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgSHR0cE1vZHVsZSxcclxuICAgIE1hdGVyaWFsTW9kdWxlLFxyXG4gICAgRmxleExheW91dE1vZHVsZSxcclxuICAgIEFib3V0TW9kdWxlLFxyXG4gICAgRGVtb0FwcE1vZHVsZSxcclxuICAgIHJvdXRpbmcsXHJcbiAgICBBdXRoTW9kdWxlLFxyXG4gICAgTG9naW5Nb2R1bGUsXHJcbiAgICBBZGRza2lsbE1vZHVsZSAgXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEFwcENvbXBvbmVudFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBBdXRoSHR0cCxcclxuICAgIEF1dGhHdWFyZCxcclxuICAgIEF1dGhOb3RHdWFyZCxcclxuICAgIHByb3ZpZGVBdXRoKHtcclxuICAgICAgaGVhZGVyTmFtZTogJ0F1dGhvcml6YXRpb24nLFxyXG4gICAgICBoZWFkZXJQcmVmaXg6ICdiZWFyZXInLFxyXG4gICAgICB0b2tlbk5hbWU6ICd0b2tlbicsXHJcbiAgICAgIHRva2VuR2V0dGVyOiAoKCkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpLFxyXG4gICAgICBnbG9iYWxIZWFkZXJzOiBbeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1dLFxyXG4gICAgICBub0p3dEVycm9yOiB0cnVlXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KSBcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0gIl19
