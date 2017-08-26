"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ButtonToggleDemoComponent = (function () {
    function ButtonToggleDemoComponent() {
        this.isVertical = false;
        this.isDisabled = false;
        this.favoritePie = 'Apple';
        this.pieOptions = [
            'Apple',
            'Cherry',
            'Pecan',
            'Lemon',
        ];
    }
    ButtonToggleDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'button-toggle-demo',
            templateUrl: 'button-toggle-demo.html',
        })
    ], ButtonToggleDemoComponent);
    return ButtonToggleDemoComponent;
}());
exports.ButtonToggleDemoComponent = ButtonToggleDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUEwQztBQU8xQztJQUxBO1FBTUUsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLGVBQVUsR0FBRztZQUNYLE9BQU87WUFDUCxRQUFRO1lBQ1IsT0FBTztZQUNQLE9BQU87U0FDUixDQUFDO0lBQ0osQ0FBQztJQVZZLHlCQUF5QjtRQUxyQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsV0FBVyxFQUFFLHlCQUF5QjtTQUN2QyxDQUFDO09BQ1cseUJBQXlCLENBVXJDO0lBQUQsZ0NBQUM7Q0FWRCxBQVVDLElBQUE7QUFWWSw4REFBeUIiLCJmaWxlIjoiYXBwL21hdGVyaWFsL2RlbW8tYXBwL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnYnV0dG9uLXRvZ2dsZS1kZW1vJyxcclxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi10b2dnbGUtZGVtby5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvblRvZ2dsZURlbW9Db21wb25lbnQge1xyXG4gIGlzVmVydGljYWwgPSBmYWxzZTtcclxuICBpc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgZmF2b3JpdGVQaWUgPSAnQXBwbGUnO1xyXG4gIHBpZU9wdGlvbnMgPSBbXHJcbiAgICAnQXBwbGUnLFxyXG4gICAgJ0NoZXJyeScsXHJcbiAgICAnUGVjYW4nLFxyXG4gICAgJ0xlbW9uJyxcclxuICBdO1xyXG59XHJcbiJdfQ==
