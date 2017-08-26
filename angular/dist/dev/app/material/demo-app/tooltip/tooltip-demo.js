"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TooltipDemoComponent = (function () {
    function TooltipDemoComponent() {
        this.position = 'below';
        this.message = 'Here is the tooltip';
        this.disabled = false;
        this.showDelay = 0;
        this.hideDelay = 1000;
    }
    TooltipDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tooltip-demo',
            templateUrl: 'tooltip-demo.html',
            styleUrls: ['tooltip-demo.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], TooltipDemoComponent);
    return TooltipDemoComponent;
}());
exports.TooltipDemoComponent = TooltipDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC90b29sdGlwL3Rvb2x0aXAtZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUFtRTtBQVVuRTtJQVBBO1FBUUUsYUFBUSxHQUFvQixPQUFPLENBQUM7UUFDcEMsWUFBTyxHQUFXLHFCQUFxQixDQUFDO1FBQ3hDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQU5ZLG9CQUFvQjtRQVBoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFDL0IsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLG9CQUFvQixDQU1oQztJQUFELDJCQUFDO0NBTkQsQUFNQyxJQUFBO0FBTlksb0RBQW9CIiwiZmlsZSI6ImFwcC9tYXRlcmlhbC9kZW1vLWFwcC90b29sdGlwL3Rvb2x0aXAtZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9vbHRpcFBvc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3Rvb2x0aXAtZGVtbycsXHJcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLWRlbW8uaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtZGVtby5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCAvLyBtYWtlIHN1cmUgdG9vbHRpcCBhbHNvIHdvcmtzIE9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcERlbW9Db21wb25lbnQge1xyXG4gIHBvc2l0aW9uOiBUb29sdGlwUG9zaXRpb24gPSAnYmVsb3cnO1xyXG4gIG1lc3NhZ2U6IHN0cmluZyA9ICdIZXJlIGlzIHRoZSB0b29sdGlwJztcclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHNob3dEZWxheSA9IDA7XHJcbiAgaGlkZURlbGF5ID0gMTAwMDtcclxufVxyXG4iXX0=
