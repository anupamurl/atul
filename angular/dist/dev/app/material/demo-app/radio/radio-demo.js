"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RadioDemoComponent = (function () {
    function RadioDemoComponent() {
        this.isDisabled = false;
        this.isAlignEnd = false;
        this.favoriteSeason = 'Autumn';
        this.seasonOptions = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    RadioDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'radio-demo',
            templateUrl: 'radio-demo.html',
            styleUrls: ['radio-demo.css'],
        })
    ], RadioDemoComponent);
    return RadioDemoComponent;
}());
exports.RadioDemoComponent = RadioDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9yYWRpby9yYWRpby1kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBUzFDO0lBTkE7UUFPRSxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsbUJBQWMsR0FBVyxRQUFRLENBQUM7UUFDbEMsa0JBQWEsR0FBRztZQUNkLFFBQVE7WUFDUixRQUFRO1lBQ1IsUUFBUTtZQUNSLFFBQVE7U0FDVCxDQUFDO0lBQ0osQ0FBQztJQVZZLGtCQUFrQjtRQU45QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSxpQkFBaUI7WUFDOUIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLGtCQUFrQixDQVU5QjtJQUFELHlCQUFDO0NBVkQsQUFVQyxJQUFBO0FBVlksZ0RBQWtCIiwiZmlsZSI6ImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9yYWRpby9yYWRpby1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3JhZGlvLWRlbW8nLFxyXG4gIHRlbXBsYXRlVXJsOiAncmFkaW8tZGVtby5odG1sJyxcclxuICBzdHlsZVVybHM6IFsncmFkaW8tZGVtby5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhZGlvRGVtb0NvbXBvbmVudCB7XHJcbiAgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzQWxpZ25FbmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBmYXZvcml0ZVNlYXNvbjogc3RyaW5nID0gJ0F1dHVtbic7XHJcbiAgc2Vhc29uT3B0aW9ucyA9IFtcclxuICAgICdXaW50ZXInLFxyXG4gICAgJ1NwcmluZycsXHJcbiAgICAnU3VtbWVyJyxcclxuICAgICdBdXR1bW4nLFxyXG4gIF07XHJcbn1cclxuIl19
