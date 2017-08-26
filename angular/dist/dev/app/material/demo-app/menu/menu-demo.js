"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MenuDemoComponent = (function () {
    function MenuDemoComponent() {
        this.selected = '';
        this.items = [
            { text: 'Refresh' },
            { text: 'Settings' },
            { text: 'Help', disabled: true },
            { text: 'Sign Out' }
        ];
        this.iconItems = [
            { text: 'Redial', icon: 'dialpad' },
            { text: 'Check voicemail', icon: 'voicemail', disabled: true },
            { text: 'Disable alerts', icon: 'notifications_off' }
        ];
    }
    MenuDemoComponent.prototype.select = function (text) { this.selected = text; };
    MenuDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'menu-demo',
            templateUrl: 'menu-demo.html',
            styleUrls: ['menu-demo.css'],
        })
    ], MenuDemoComponent);
    return MenuDemoComponent;
}());
exports.MenuDemoComponent = MenuDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9tZW51L21lbnUtZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUEwQztBQVExQztJQU5BO1FBT0UsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFVBQUssR0FBRztZQUNOLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUNqQixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDbEIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7WUFDOUIsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO1NBQ25CLENBQUM7UUFNRixjQUFTLEdBQUc7WUFDVixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUNqQyxFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7WUFDNUQsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFDO1NBQ3BELENBQUM7SUFHSixDQUFDO0lBREMsa0NBQU0sR0FBTixVQUFPLElBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFuQm5DLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSxnQkFBZ0I7WUFDN0IsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO1NBQzdCLENBQUM7T0FDVyxpQkFBaUIsQ0FvQjdCO0lBQUQsd0JBQUM7Q0FwQkQsQUFvQkMsSUFBQTtBQXBCWSw4Q0FBaUIiLCJmaWxlIjoiYXBwL21hdGVyaWFsL2RlbW8tYXBwL21lbnUvbWVudS1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbWVudS1kZW1vJyxcclxuICB0ZW1wbGF0ZVVybDogJ21lbnUtZGVtby5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbWVudS1kZW1vLmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudURlbW9Db21wb25lbnQge1xyXG4gIHNlbGVjdGVkID0gJyc7XHJcbiAgaXRlbXMgPSBbXHJcbiAgICB7dGV4dDogJ1JlZnJlc2gnfSxcclxuICAgIHt0ZXh0OiAnU2V0dGluZ3MnfSxcclxuICAgIHt0ZXh0OiAnSGVscCcsIGRpc2FibGVkOiB0cnVlfSxcclxuICAgIHt0ZXh0OiAnU2lnbiBPdXQnfVxyXG4gIF07XHJcbiAgbWVudTogYW55O1xyXG4gIGFuY2hvck1lbnU6IGFueTtcclxuICBwb3NYTWVudTogYW55O1xyXG4gIHBvc1lNZW51OiBhbnk7XHJcblxyXG4gIGljb25JdGVtcyA9IFtcclxuICAgIHt0ZXh0OiAnUmVkaWFsJywgaWNvbjogJ2RpYWxwYWQnfSxcclxuICAgIHt0ZXh0OiAnQ2hlY2sgdm9pY2VtYWlsJywgaWNvbjogJ3ZvaWNlbWFpbCcsIGRpc2FibGVkOiB0cnVlfSxcclxuICAgIHt0ZXh0OiAnRGlzYWJsZSBhbGVydHMnLCBpY29uOiAnbm90aWZpY2F0aW9uc19vZmYnfVxyXG4gIF07XHJcblxyXG4gIHNlbGVjdCh0ZXh0OiBzdHJpbmcpIHsgdGhpcy5zZWxlY3RlZCA9IHRleHQ7IH1cclxufVxyXG4iXX0=
