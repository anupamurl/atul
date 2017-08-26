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
var material_1 = require("@angular/material");
var PortalDemoComponent = (function () {
    function PortalDemoComponent() {
    }
    Object.defineProperty(PortalDemoComponent.prototype, "programmingJoke", {
        get: function () {
            return this.templatePortals.first;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortalDemoComponent.prototype, "mathJoke", {
        get: function () {
            return this.templatePortals.last;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PortalDemoComponent.prototype, "scienceJoke", {
        get: function () {
            return new material_1.ComponentPortal(ScienceJokeComponent);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChildren(material_1.TemplatePortalDirective),
        __metadata("design:type", core_1.QueryList)
    ], PortalDemoComponent.prototype, "templatePortals", void 0);
    PortalDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'portal-demo',
            templateUrl: 'portal-demo.html',
            styleUrls: ['portal-demo.css'],
        })
    ], PortalDemoComponent);
    return PortalDemoComponent;
}());
exports.PortalDemoComponent = PortalDemoComponent;
var ScienceJokeComponent = (function () {
    function ScienceJokeComponent() {
    }
    ScienceJokeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'science-joke',
            template: "<p> 100 kilopascals go into a bar. </p>"
        })
    ], ScienceJokeComponent);
    return ScienceJokeComponent;
}());
exports.ScienceJokeComponent = ScienceJokeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9wb3J0YWwvcG9ydGFsLWRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBbUU7QUFDbkUsOENBSTJCO0FBUTNCO0lBQUE7SUFnQkEsQ0FBQztJQVhDLHNCQUFJLGdEQUFlO2FBQW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQVE7YUFBWjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFXO2FBQWY7WUFDRSxNQUFNLENBQUMsSUFBSSwwQkFBZSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFkc0M7UUFBdEMsbUJBQVksQ0FBQyxrQ0FBdUIsQ0FBQztrQ0FBa0IsZ0JBQVM7Z0VBQWM7SUFEcEUsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztTQUMvQixDQUFDO09BQ1csbUJBQW1CLENBZ0IvQjtJQUFELDBCQUFDO0NBaEJELEFBZ0JDLElBQUE7QUFoQlksa0RBQW1CO0FBd0JoQztJQUFBO0lBQW9DLENBQUM7SUFBeEIsb0JBQW9CO1FBTGhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLHlDQUF5QztTQUNwRCxDQUFDO09BQ1csb0JBQW9CLENBQUk7SUFBRCwyQkFBQztDQUFyQyxBQUFxQyxJQUFBO0FBQXhCLG9EQUFvQiIsImZpbGUiOiJhcHAvbWF0ZXJpYWwvZGVtby1hcHAvcG9ydGFsL3BvcnRhbC1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGRyZW4sIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gICAgUG9ydGFsLFxyXG4gICAgQ29tcG9uZW50UG9ydGFsLFxyXG4gICAgVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3BvcnRhbC1kZW1vJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BvcnRhbC1kZW1vLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydwb3J0YWwtZGVtby5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcnRhbERlbW9Db21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGRyZW4oVGVtcGxhdGVQb3J0YWxEaXJlY3RpdmUpIHRlbXBsYXRlUG9ydGFsczogUXVlcnlMaXN0PFBvcnRhbDxhbnk+PjtcclxuXHJcbiAgc2VsZWN0ZWRQb3J0YWw6IFBvcnRhbDxhbnk+O1xyXG5cclxuICBnZXQgcHJvZ3JhbW1pbmdKb2tlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVQb3J0YWxzLmZpcnN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1hdGhKb2tlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVQb3J0YWxzLmxhc3Q7XHJcbiAgfVxyXG5cclxuICBnZXQgc2NpZW5jZUpva2UoKSB7XHJcbiAgICByZXR1cm4gbmV3IENvbXBvbmVudFBvcnRhbChTY2llbmNlSm9rZUNvbXBvbmVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NjaWVuY2Utam9rZScsXHJcbiAgdGVtcGxhdGU6IGA8cD4gMTAwIGtpbG9wYXNjYWxzIGdvIGludG8gYSBiYXIuIDwvcD5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2llbmNlSm9rZUNvbXBvbmVudCB7IH1cclxuIl19
