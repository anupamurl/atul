"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProgressBarDemoComponent = (function () {
    function ProgressBarDemoComponent() {
        this.determinateProgressValue = 30;
        this.bufferProgressValue = 30;
        this.bufferBufferValue = 40;
    }
    ProgressBarDemoComponent.prototype.stepDeterminateProgressVal = function (val) {
        this.determinateProgressValue += val;
    };
    ProgressBarDemoComponent.prototype.stepBufferProgressVal = function (val) {
        this.bufferProgressValue += val;
    };
    ProgressBarDemoComponent.prototype.stepBufferBufferVal = function (val) {
        this.bufferBufferValue += val;
    };
    ProgressBarDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'progress-bar-demo',
            templateUrl: 'progress-bar-demo.html',
            styleUrls: ['progress-bar-demo.css'],
        })
    ], ProgressBarDemoComponent);
    return ProgressBarDemoComponent;
}());
exports.ProgressBarDemoComponent = ProgressBarDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLWRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFXMUM7SUFOQTtRQU9FLDZCQUF3QixHQUFXLEVBQUUsQ0FBQztRQUN0Qyx3QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFDakMsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO0lBYWpDLENBQUM7SUFYQyw2REFBMEIsR0FBMUIsVUFBMkIsR0FBVztRQUNwQyxJQUFJLENBQUMsd0JBQXdCLElBQUksR0FBRyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx3REFBcUIsR0FBckIsVUFBc0IsR0FBVztRQUMvQixJQUFJLENBQUMsbUJBQW1CLElBQUksR0FBRyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxzREFBbUIsR0FBbkIsVUFBb0IsR0FBVztRQUM3QixJQUFJLENBQUMsaUJBQWlCLElBQUksR0FBRyxDQUFDO0lBQ2hDLENBQUM7SUFmVSx3QkFBd0I7UUFOcEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQztPQUNXLHdCQUF3QixDQWdCcEM7SUFBRCwrQkFBQztDQWhCRCxBQWdCQyxJQUFBO0FBaEJZLDREQUF3QiIsImZpbGUiOiJhcHAvbWF0ZXJpYWwvZGVtby1hcHAvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogQWRkIGFuIGF1dG9tYXRpY2FsbHkgZmlsbGluZyBleGFtcGxlIHByb2dyZXNzIGJhci5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdwcm9ncmVzcy1iYXItZGVtbycsXHJcbiAgdGVtcGxhdGVVcmw6ICdwcm9ncmVzcy1iYXItZGVtby5odG1sJyxcclxuICBzdHlsZVVybHM6IFsncHJvZ3Jlc3MtYmFyLWRlbW8uY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckRlbW9Db21wb25lbnQge1xyXG4gIGRldGVybWluYXRlUHJvZ3Jlc3NWYWx1ZTogbnVtYmVyID0gMzA7XHJcbiAgYnVmZmVyUHJvZ3Jlc3NWYWx1ZTogbnVtYmVyID0gMzA7XHJcbiAgYnVmZmVyQnVmZmVyVmFsdWU6IG51bWJlciA9IDQwO1xyXG5cclxuICBzdGVwRGV0ZXJtaW5hdGVQcm9ncmVzc1ZhbCh2YWw6IG51bWJlcikge1xyXG4gICAgdGhpcy5kZXRlcm1pbmF0ZVByb2dyZXNzVmFsdWUgKz0gdmFsO1xyXG4gIH1cclxuXHJcbiAgc3RlcEJ1ZmZlclByb2dyZXNzVmFsKHZhbDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmJ1ZmZlclByb2dyZXNzVmFsdWUgKz0gdmFsO1xyXG4gIH1cclxuXHJcbiAgc3RlcEJ1ZmZlckJ1ZmZlclZhbCh2YWw6IG51bWJlcikge1xyXG4gICAgdGhpcy5idWZmZXJCdWZmZXJWYWx1ZSArPSB2YWw7XHJcbiAgfVxyXG59XHJcbiJdfQ==
