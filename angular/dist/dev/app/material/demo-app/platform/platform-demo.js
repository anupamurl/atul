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
var PlatformDemoComponent = (function () {
    function PlatformDemoComponent(platform) {
        this.platform = platform;
        this.supportedInputTypes = material_1.getSupportedInputTypes();
    }
    PlatformDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'platform-demo',
            templateUrl: 'platform-demo.html',
        }),
        __metadata("design:paramtypes", [material_1.Platform])
    ], PlatformDemoComponent);
    return PlatformDemoComponent;
}());
exports.PlatformDemoComponent = PlatformDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9wbGF0Zm9ybS9wbGF0Zm9ybS1kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLDhDQUFxRTtBQU9yRTtJQUdFLCtCQUFtQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBRnJDLHdCQUFtQixHQUFHLGlDQUFzQixFQUFFLENBQUM7SUFFUCxDQUFDO0lBSDlCLHFCQUFxQjtRQUxqQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxvQkFBb0I7U0FDbEMsQ0FBQzt5Q0FJNkIsbUJBQVE7T0FIMUIscUJBQXFCLENBSWpDO0lBQUQsNEJBQUM7Q0FKRCxBQUlDLElBQUE7QUFKWSxzREFBcUIiLCJmaWxlIjoiYXBwL21hdGVyaWFsL2RlbW8tYXBwL3BsYXRmb3JtL3BsYXRmb3JtLWRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGxhdGZvcm0sIGdldFN1cHBvcnRlZElucHV0VHlwZXMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAncGxhdGZvcm0tZGVtbycsXHJcbiAgdGVtcGxhdGVVcmw6ICdwbGF0Zm9ybS1kZW1vLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1EZW1vQ29tcG9uZW50IHtcclxuICBzdXBwb3J0ZWRJbnB1dFR5cGVzID0gZ2V0U3VwcG9ydGVkSW5wdXRUeXBlcygpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxyXG59XHJcbiJdfQ==
