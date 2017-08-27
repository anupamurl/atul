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
var common_1 = require("@angular/common");
var shared_module_1 = require("../shared/shared.module");
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        core_1.NgModule({
            imports: [about_router_1.aboutRouting, material_1.MaterialModule, shared_module_1.SharedModule, common_1.CommonModule],
            exports: [about_component_1.AboutComponent],
            declarations: [about_component_1.AboutComponent],
        })
    ], AboutModule);
    return AboutModule;
}());
exports.AboutModule = AboutModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBbUQ7QUFDbkQsK0NBQXlEO0FBQ3pELDhDQUFtRDtBQUNuRCxxREFBbUQ7QUFDbkQsMENBQStDO0FBQy9DLHlEQUF1RDtBQVV2RDtJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBTnZCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBTyxDQUFFLDJCQUFZLEVBQUUseUJBQWMsRUFBSSw0QkFBWSxFQUFLLHFCQUFZLENBQUc7WUFDaEYsT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztZQUN6QixZQUFZLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQy9CLENBQUM7T0FFVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUE1QixBQUE0QixJQUFBO0FBQWYsa0NBQVciLCJmaWxlIjoiYXBwL2Fib3V0L2Fib3V0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBhYm91dFJvdXRpbmcgfSAgICAgICAgICAgIGZyb20gJy4vYWJvdXQucm91dGVyJztcclxuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogICAgICBbIGFib3V0Um91dGluZywgTWF0ZXJpYWxNb2R1bGUgICwgU2hhcmVkTW9kdWxlICAgLCBDb21tb25Nb2R1bGUgIF0sXHJcbiAgZXhwb3J0czogW0Fib3V0Q29tcG9uZW50XSxcclxuICBkZWNsYXJhdGlvbnM6IFtBYm91dENvbXBvbmVudF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRNb2R1bGUgeyB9XHJcbiJdfQ==
