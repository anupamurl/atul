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
var RippleDemoComponent = (function () {
    function RippleDemoComponent() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
        this.rounded = false;
        this.radius = null;
        this.rippleSpeed = 1;
        this.rippleColor = '';
        this.disableButtonRipples = false;
    }
    RippleDemoComponent.prototype.launchRipple = function (persistent) {
        if (persistent === void 0) { persistent = false; }
        if (this.ripple) {
        }
    };
    RippleDemoComponent.prototype.fadeOutAll = function () {
        if (this.ripple) {
        }
    };
    __decorate([
        core_1.ViewChild(material_1.MdRipple),
        __metadata("design:type", material_1.MdRipple)
    ], RippleDemoComponent.prototype, "ripple", void 0);
    RippleDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ripple-demo',
            templateUrl: 'ripple-demo.html',
            styleUrls: ['ripple-demo.css'],
        })
    ], RippleDemoComponent);
    return RippleDemoComponent;
}());
exports.RippleDemoComponent = RippleDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9yaXBwbGUvcmlwcGxlLWRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUQ7QUFDckQsOENBQTZDO0FBUTdDO0lBTkE7UUFTRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIseUJBQW9CLEdBQUcsS0FBSyxDQUFDO0lBYy9CLENBQUM7SUFaQywwQ0FBWSxHQUFaLFVBQWEsVUFBa0I7UUFBbEIsMkJBQUEsRUFBQSxrQkFBa0I7UUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFbEIsQ0FBQztJQUNILENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFbEIsQ0FBQztJQUNILENBQUM7SUF0Qm9CO1FBQXBCLGdCQUFTLENBQUMsbUJBQVEsQ0FBQztrQ0FBUyxtQkFBUTt1REFBQztJQUQzQixtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsa0JBQWtCO1lBQy9CLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1NBQy9CLENBQUM7T0FDVyxtQkFBbUIsQ0F5Qi9CO0lBQUQsMEJBQUM7Q0F6QkQsQUF5QkMsSUFBQTtBQXpCWSxrREFBbUIiLCJmaWxlIjoiYXBwL21hdGVyaWFsL2RlbW8tYXBwL3JpcHBsZS9yaXBwbGUtZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1kUmlwcGxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3JpcHBsZS1kZW1vJyxcclxuICB0ZW1wbGF0ZVVybDogJ3JpcHBsZS1kZW1vLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydyaXBwbGUtZGVtby5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJpcHBsZURlbW9Db21wb25lbnQge1xyXG4gIEBWaWV3Q2hpbGQoTWRSaXBwbGUpIHJpcHBsZTogTWRSaXBwbGU7XHJcblxyXG4gIGNlbnRlcmVkID0gZmFsc2U7XHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICB1bmJvdW5kZWQgPSBmYWxzZTtcclxuICByb3VuZGVkID0gZmFsc2U7XHJcbiAgcmFkaXVzOiBudW1iZXIgPSBudWxsO1xyXG4gIHJpcHBsZVNwZWVkID0gMTtcclxuICByaXBwbGVDb2xvciA9ICcnO1xyXG5cclxuICBkaXNhYmxlQnV0dG9uUmlwcGxlcyA9IGZhbHNlO1xyXG5cclxuICBsYXVuY2hSaXBwbGUocGVyc2lzdGVudCA9IGZhbHNlKSB7XHJcbiAgICBpZiAodGhpcy5yaXBwbGUpIHtcclxuICAgICAgLy90aGlzLnJpcHBsZS5sYXVuY2goMCwgMCwgeyBjZW50ZXJlZDogdHJ1ZSwgcGVyc2lzdGVudCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZhZGVPdXRBbGwoKSB7XHJcbiAgICBpZiAodGhpcy5yaXBwbGUpIHtcclxuICAgICAgLy90aGlzLnJpcHBsZS5mYWRlT3V0QWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
