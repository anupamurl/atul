"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var addskill_router_1 = require("./addskill.router");
var material_1 = require("@angular/material");
var addskill_component_1 = require("./addskill.component");
var shared_module_1 = require("../shared/shared.module");
var forms_1 = require("@angular/forms");
var AddskillModule = (function () {
    function AddskillModule() {
    }
    AddskillModule = __decorate([
        core_1.NgModule({
            imports: [addskill_router_1.addskillRouting, material_1.MaterialModule, shared_module_1.SharedModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            exports: [addskill_component_1.AddskillComponent],
            declarations: [addskill_component_1.AddskillComponent],
        })
    ], AddskillModule);
    return AddskillModule;
}());
exports.AddskillModule = AddskillModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZGRza2lsbC9hZGRza2lsbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBbUQ7QUFDbkQscURBQStEO0FBQy9ELDhDQUFtRDtBQUNuRCwyREFBeUQ7QUFFekQseURBQXVEO0FBQ3ZELHdDQUFrRTtBQVNsRTtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQU4xQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQU8sQ0FBRSxpQ0FBZSxFQUFFLHlCQUFjLEVBQUksNEJBQVksRUFBSSxtQkFBVyxFQUFFLDJCQUFtQixDQUFFO1lBQ3JHLE9BQU8sRUFBRSxDQUFDLHNDQUFpQixDQUFDO1lBQzVCLFlBQVksRUFBRSxDQUFDLHNDQUFpQixDQUFDO1NBQ2xDLENBQUM7T0FFVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUEvQixBQUErQixJQUFBO0FBQWxCLHdDQUFjIiwiZmlsZSI6ImFwcC9hZGRza2lsbC9hZGRza2lsbC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgYWRkc2tpbGxSb3V0aW5nIH0gICAgICAgICAgICBmcm9tICcuL2FkZHNraWxsLnJvdXRlcic7XHJcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBBZGRza2lsbENvbXBvbmVudCB9IGZyb20gJy4vYWRkc2tpbGwuY29tcG9uZW50JztcclxuIFxyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogICAgICBbIGFkZHNraWxsUm91dGluZywgTWF0ZXJpYWxNb2R1bGUgICwgU2hhcmVkTW9kdWxlICAsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIF0sXHJcbiAgZXhwb3J0czogW0FkZHNraWxsQ29tcG9uZW50XSxcclxuICBkZWNsYXJhdGlvbnM6IFtBZGRza2lsbENvbXBvbmVudF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWRkc2tpbGxNb2R1bGUgeyB9XHJcbiJdfQ==
