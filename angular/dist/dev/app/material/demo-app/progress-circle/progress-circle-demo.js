"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProgressCircleDemoComponent = (function () {
    function ProgressCircleDemoComponent() {
        this.progressValue = 60;
        this.color = 'primary';
        this.modeToggle = false;
    }
    ProgressCircleDemoComponent.prototype.step = function (val) {
        this.progressValue = Math.max(0, Math.min(100, val + this.progressValue));
    };
    ProgressCircleDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'progress-circle-demo',
            templateUrl: 'progress-circle-demo.html',
            styleUrls: ['progress-circle-demo.css'],
        })
    ], ProgressCircleDemoComponent);
    return ProgressCircleDemoComponent;
}());
exports.ProgressCircleDemoComponent = ProgressCircleDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9wcm9ncmVzcy1jaXJjbGUvcHJvZ3Jlc3MtY2lyY2xlLWRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFRMUM7SUFOQTtRQU9FLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLFVBQUssR0FBVyxTQUFTLENBQUM7UUFDMUIsZUFBVSxHQUFZLEtBQUssQ0FBQztJQU05QixDQUFDO0lBSkMsMENBQUksR0FBSixVQUFLLEdBQVc7UUFDZCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBUFUsMkJBQTJCO1FBTnZDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7T0FDVywyQkFBMkIsQ0FTdkM7SUFBRCxrQ0FBQztDQVRELEFBU0MsSUFBQTtBQVRZLGtFQUEyQiIsImZpbGUiOiJhcHAvbWF0ZXJpYWwvZGVtby1hcHAvcHJvZ3Jlc3MtY2lyY2xlL3Byb2dyZXNzLWNpcmNsZS1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAncHJvZ3Jlc3MtY2lyY2xlLWRlbW8nLFxyXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3MtY2lyY2xlLWRlbW8uaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3Byb2dyZXNzLWNpcmNsZS1kZW1vLmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NDaXJjbGVEZW1vQ29tcG9uZW50IHtcclxuICBwcm9ncmVzc1ZhbHVlOiBudW1iZXIgPSA2MDtcclxuICBjb2xvcjogc3RyaW5nID0gJ3ByaW1hcnknO1xyXG4gIG1vZGVUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgc3RlcCh2YWw6IG51bWJlcikge1xyXG4gICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCB2YWwgKyB0aGlzLnByb2dyZXNzVmFsdWUpKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
