"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var login_router_1 = require("./login.router");
var material_1 = require("@angular/material");
var login_component_1 = require("./login.component");
var forms_1 = require("@angular/forms");
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [login_router_1.loginRouting, material_1.MaterialModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            exports: [login_component_1.LoginComponent],
            declarations: [login_component_1.LoginComponent],
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBbUQ7QUFDbkQsK0NBQXlEO0FBQ3pELDhDQUFtRDtBQUNuRCxxREFBbUQ7QUFDbkQsd0NBQWtFO0FBU2xFO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUFOdkIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFPLENBQUUsMkJBQVksRUFBRSx5QkFBYyxFQUFHLG1CQUFXLEVBQUcsMkJBQW1CLENBQUM7WUFDakYsT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUN6QixZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQy9CLENBQUM7T0FFVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUE1QixBQUE0QixJQUFBO0FBQWYsa0NBQVciLCJmaWxlIjoiYXBwL2xvZ2luL2xvZ2luLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBsb2dpblJvdXRpbmcgfSAgICAgICAgICAgIGZyb20gJy4vbG9naW4ucm91dGVyJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuIFxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiAgICAgIFsgbG9naW5Sb3V0aW5nLCBNYXRlcmlhbE1vZHVsZSAsIEZvcm1zTW9kdWxlICwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXHJcbiAgZXhwb3J0czogW0xvZ2luQ29tcG9uZW50XSxcclxuICBkZWNsYXJhdGlvbnM6IFtMb2dpbkNvbXBvbmVudF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUgeyB9XHJcbiJdfQ==
