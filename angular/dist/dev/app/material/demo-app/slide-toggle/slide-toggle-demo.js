"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SlideToggleDemoComponent = (function () {
    function SlideToggleDemoComponent() {
    }
    SlideToggleDemoComponent.prototype.onFormSubmit = function () {
        alert("You submitted the form.");
    };
    SlideToggleDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'switch-demo',
            templateUrl: 'slide-toggle-demo.html',
            styleUrls: ['slide-toggle-demo.css'],
        })
    ], SlideToggleDemoComponent);
    return SlideToggleDemoComponent;
}());
exports.SlideToggleDemoComponent = SlideToggleDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9zbGlkZS10b2dnbGUvc2xpZGUtdG9nZ2xlLWRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFRMUM7SUFBQTtJQU9BLENBQUM7SUFKQywrQ0FBWSxHQUFaO1FBQ0UsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUxVLHdCQUF3QjtRQU5wQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQztPQUNXLHdCQUF3QixDQU9wQztJQUFELCtCQUFDO0NBUEQsQUFPQyxJQUFBO0FBUFksNERBQXdCIiwiZmlsZSI6ImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9zbGlkZS10b2dnbGUvc2xpZGUtdG9nZ2xlLWRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzd2l0Y2gtZGVtbycsXHJcbiAgdGVtcGxhdGVVcmw6ICdzbGlkZS10b2dnbGUtZGVtby5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnc2xpZGUtdG9nZ2xlLWRlbW8uY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbGlkZVRvZ2dsZURlbW9Db21wb25lbnQge1xyXG4gIGZpcnN0VG9nZ2xlOiBib29sZWFuO1xyXG5cclxuICBvbkZvcm1TdWJtaXQoKSB7XHJcbiAgICBhbGVydChgWW91IHN1Ym1pdHRlZCB0aGUgZm9ybS5gKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
