"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GesturesDemoComponent = (function () {
    function GesturesDemoComponent() {
        this.dragCount = 0;
        this.panCount = 0;
        this.pressCount = 0;
        this.longpressCount = 0;
        this.swipeCount = 0;
        this.slideCount = 0;
    }
    GesturesDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'gestures-demo',
            templateUrl: 'gestures-demo.html',
            styleUrls: ['gestures-demo.css'],
        })
    ], GesturesDemoComponent);
    return GesturesDemoComponent;
}());
exports.GesturesDemoComponent = GesturesDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9nZXN0dXJlcy9nZXN0dXJlcy1kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBUTFDO0lBTkE7UUFPRSxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGVBQVUsR0FBVyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQVBZLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDakMsQ0FBQztPQUNXLHFCQUFxQixDQU9qQztJQUFELDRCQUFDO0NBUEQsQUFPQyxJQUFBO0FBUFksc0RBQXFCIiwiZmlsZSI6ImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9nZXN0dXJlcy9nZXN0dXJlcy1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnZ2VzdHVyZXMtZGVtbycsXHJcbiAgdGVtcGxhdGVVcmw6ICdnZXN0dXJlcy1kZW1vLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydnZXN0dXJlcy1kZW1vLmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VzdHVyZXNEZW1vQ29tcG9uZW50IHtcclxuICBkcmFnQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgcGFuQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgcHJlc3NDb3VudDogbnVtYmVyID0gMDtcclxuICBsb25ncHJlc3NDb3VudDogbnVtYmVyID0gMDtcclxuICBzd2lwZUNvdW50OiBudW1iZXIgPSAwO1xyXG4gIHNsaWRlQ291bnQ6IG51bWJlciA9IDA7XHJcbn1cclxuIl19
