"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var about_router_1 = require("./about.router");
var material_1 = require("@angular/material");
var about_component_1 = require("./about.component");
var shared_module_1 = require("../shared/shared.module");
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        core_1.NgModule({
            imports: [about_router_1.aboutRouting, material_1.MaterialModule, shared_module_1.SharedModule],
            exports: [about_component_1.AboutComponent],
            declarations: [about_component_1.AboutComponent],
        })
    ], AboutModule);
    return AboutModule;
}());
exports.AboutModule = AboutModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBbUQ7QUFDbkQsK0NBQXlEO0FBQ3pELDhDQUFtRDtBQUNuRCxxREFBbUQ7QUFFbkQseURBQXVEO0FBVXZEO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUFOdkIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFPLENBQUUsMkJBQVksRUFBRSx5QkFBYyxFQUFJLDRCQUFZLENBQUc7WUFDL0QsT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUN6QixZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQy9CLENBQUM7T0FFVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUE1QixBQUE0QixJQUFBO0FBQWYsa0NBQVciLCJmaWxlIjoiYXBwL2Fib3V0L2Fib3V0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhYm91dFJvdXRpbmcgfSAgICAgICAgICAgIGZyb20gJy4vYWJvdXQucm91dGVyJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC5jb21wb25lbnQnO1xyXG4gXHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiAgICAgIFsgYWJvdXRSb3V0aW5nLCBNYXRlcmlhbE1vZHVsZSAgLCBTaGFyZWRNb2R1bGUgIF0sXHJcbiAgZXhwb3J0czogW0Fib3V0Q29tcG9uZW50XSxcclxuICBkZWNsYXJhdGlvbnM6IFtBYm91dENvbXBvbmVudF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRNb2R1bGUgeyB9XHJcbiJdfQ==
