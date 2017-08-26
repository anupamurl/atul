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
var Observable_1 = require("rxjs/Observable");
var TabsDemoComponent = (function () {
    function TabsDemoComponent() {
        var _this = this;
        this.tabLinks = [
            { label: 'Sun', link: 'sunny-tab' },
            { label: 'Rain', link: 'rainy-tab' },
            { label: 'Fog', link: 'foggy-tab' },
        ];
        this.tabNavBackground = undefined;
        this.tabs = [
            {
                label: 'Tab 1',
                content: 'This is the body of the first tab'
            }, {
                label: 'Tab 2',
                disabled: true,
                content: 'This is the body of the second tab'
            }, {
                label: 'Tab 3',
                extraContent: true,
                content: 'This is the body of the third tab'
            }, {
                label: 'Tab 4',
                content: 'This is the body of the fourth tab'
            },
        ];
        this.activeTabIndex = 0;
        this.addTabPosition = 0;
        this.gotoNewTabAfterAdding = false;
        this.createWithLongContent = false;
        this.dynamicTabs = [
            {
                label: 'Tab 1',
                content: 'This is the body of the first tab'
            }, {
                label: 'Tab 2',
                disabled: true,
                content: 'This is the body of the second tab'
            }, {
                label: 'Tab 3',
                extraContent: true,
                content: 'This is the body of the third tab'
            }, {
                label: 'Tab 4',
                content: 'This is the body of the fourth tab'
            },
        ];
        this.asyncTabs = Observable_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next(_this.tabs);
            }, 1000);
        });
    }
    TabsDemoComponent.prototype.addTab = function (includeExtraContent) {
        this.dynamicTabs.splice(this.addTabPosition, 0, {
            label: 'New Tab ' + (this.dynamicTabs.length + 1),
            content: 'New tab contents ' + (this.dynamicTabs.length + 1),
            extraContent: includeExtraContent
        });
        if (this.gotoNewTabAfterAdding) {
            this.activeTabIndex = this.addTabPosition;
        }
    };
    TabsDemoComponent.prototype.deleteTab = function (tab) {
        this.dynamicTabs.splice(this.dynamicTabs.indexOf(tab), 1);
    };
    TabsDemoComponent.prototype.swapTabLinks = function () {
        var temp = this.tabLinks[0];
        this.tabLinks[0] = this.tabLinks[1];
        this.tabLinks[1] = temp;
    };
    TabsDemoComponent.prototype.addToLabel = function () {
        this.tabLinks.forEach(function (link) { return link.label += 'extracontent'; });
    };
    TabsDemoComponent.prototype.toggleBackground = function () {
        this.tabNavBackground = this.tabNavBackground ? undefined : 'primary';
    };
    TabsDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tabs-demo',
            templateUrl: 'tabs-demo.html',
            styleUrls: ['tabs-demo.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [])
    ], TabsDemoComponent);
    return TabsDemoComponent;
}());
exports.TabsDemoComponent = TabsDemoComponent;
var SunnyTabContentComponent = (function () {
    function SunnyTabContentComponent() {
    }
    SunnyTabContentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sunny-routed-content',
            template: 'This is the routed body of the sunny tab.',
        })
    ], SunnyTabContentComponent);
    return SunnyTabContentComponent;
}());
exports.SunnyTabContentComponent = SunnyTabContentComponent;
var RainyTabContentComponent = (function () {
    function RainyTabContentComponent() {
    }
    RainyTabContentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rainy-routed-content',
            template: 'This is the routed body of the rainy tab.',
        })
    ], RainyTabContentComponent);
    return RainyTabContentComponent;
}());
exports.RainyTabContentComponent = RainyTabContentComponent;
var FoggyTabContentComponent = (function () {
    function FoggyTabContentComponent() {
    }
    FoggyTabContentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'foggy-routed-content',
            template: 'This is the routed body of the foggy tab.',
        })
    ], FoggyTabContentComponent);
    return FoggyTabContentComponent;
}());
exports.FoggyTabContentComponent = FoggyTabContentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC90YWJzL3RhYnMtZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUE2RDtBQUU3RCw4Q0FBNkM7QUFTN0M7SUFzREU7UUFBQSxpQkFNQztRQTFERCxhQUFRLEdBQUc7WUFDVCxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztZQUNqQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztZQUNsQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztTQUNsQyxDQUFDO1FBRUYscUJBQWdCLEdBQVEsU0FBUyxDQUFDO1FBR2xDLFNBQUksR0FBRztZQUNMO2dCQUNFLEtBQUssRUFBRSxPQUFPO2dCQUNkLE9BQU8sRUFBRSxtQ0FBbUM7YUFDN0MsRUFBRTtnQkFDRCxLQUFLLEVBQUUsT0FBTztnQkFDZCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxPQUFPLEVBQUUsb0NBQW9DO2FBQzlDLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLE9BQU8sRUFBRSxtQ0FBbUM7YUFDN0MsRUFBRTtnQkFDRCxLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsb0NBQW9DO2FBQzlDO1NBQ0YsQ0FBQztRQUdGLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLDBCQUFxQixHQUFHLEtBQUssQ0FBQztRQUM5QiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDOUIsZ0JBQVcsR0FBRztZQUNaO2dCQUNFLEtBQUssRUFBRSxPQUFPO2dCQUNkLE9BQU8sRUFBRSxtQ0FBbUM7YUFDN0MsRUFBRTtnQkFDRCxLQUFLLEVBQUUsT0FBTztnQkFDZCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxPQUFPLEVBQUUsb0NBQW9DO2FBQzlD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TSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsMkNBQTJDO1NBQ3RELENBQUM7T0FDVyx3QkFBd0IsQ0FBRztJQUFELCtCQUFDO0NBQXhDLEFBQXdDLElBQUE7QUFBM0IsNERBQXdCO0FBUXJDO0lBQUE7SUFBdUMsQ0FBQztJQUEzQix3QkFBd0I7UUFMcEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFFBQVEsRUFBRSwyQ0FBMkM7U0FDdEQsQ0FBQztPQUNXLHdCQUF3QixDQUFHO0lBQUQsK0JBQUM7Q0FBeEMsQUFBd0MsSUFBQTtBQUEzQiw0REFBd0IiLCJmaWxlIjoiYXBwL21hdGVyaWFsL2RlbW8tYXBwL3RhYnMvdGFicy1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICd0YWJzLWRlbW8nLFxyXG4gIHRlbXBsYXRlVXJsOiAndGFicy1kZW1vLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWyd0YWJzLWRlbW8uY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNEZW1vQ29tcG9uZW50IHtcclxuICAvLyBOYXYgYmFyIGRlbW9cclxuICB0YWJMaW5rcyA9IFtcclxuICAgIHtsYWJlbDogJ1N1bicsIGxpbms6ICdzdW5ueS10YWInfSxcclxuICAgIHtsYWJlbDogJ1JhaW4nLCBsaW5rOiAncmFpbnktdGFiJ30sXHJcbiAgICB7bGFiZWw6ICdGb2cnLCBsaW5rOiAnZm9nZ3ktdGFiJ30sXHJcbiAgXTtcclxuXHJcbiAgdGFiTmF2QmFja2dyb3VuZDogYW55ID0gdW5kZWZpbmVkO1xyXG5cclxuICAvLyBTdGFuZGFyZCB0YWJzIGRlbW9cclxuICB0YWJzID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogJ1RhYiAxJyxcclxuICAgICAgY29udGVudDogJ1RoaXMgaXMgdGhlIGJvZHkgb2YgdGhlIGZpcnN0IHRhYidcclxuICAgIH0sIHtcclxuICAgICAgbGFiZWw6ICdUYWIgMicsXHJcbiAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICBjb250ZW50OiAnVGhpcyBpcyB0aGUgYm9keSBvZiB0aGUgc2Vjb25kIHRhYidcclxuICAgIH0sIHtcclxuICAgICAgbGFiZWw6ICdUYWIgMycsXHJcbiAgICAgIGV4dHJhQ29udGVudDogdHJ1ZSxcclxuICAgICAgY29udGVudDogJ1RoaXMgaXMgdGhlIGJvZHkgb2YgdGhlIHRoaXJkIHRhYidcclxuICAgIH0sIHtcclxuICAgICAgbGFiZWw6ICdUYWIgNCcsXHJcbiAgICAgIGNvbnRlbnQ6ICdUaGlzIGlzIHRoZSBib2R5IG9mIHRoZSBmb3VydGggdGFiJ1xyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICAvLyBEeW5hbWljIHRhYnMgZGVtb1xyXG4gIGFjdGl2ZVRhYkluZGV4ID0gMDtcclxuICBhZGRUYWJQb3NpdGlvbiA9IDA7XHJcbiAgZ290b05ld1RhYkFmdGVyQWRkaW5nID0gZmFsc2U7XHJcbiAgY3JlYXRlV2l0aExvbmdDb250ZW50ID0gZmFsc2U7XHJcbiAgZHluYW1pY1RhYnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiAnVGFiIDEnLFxyXG4gICAgICBjb250ZW50OiAnVGhpcyBpcyB0aGUgYm9keSBvZiB0aGUgZmlyc3QgdGFiJ1xyXG4gICAgfSwge1xyXG4gICAgICBsYWJlbDogJ1RhYiAyJyxcclxuICAgICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICAgIGNvbnRlbnQ6ICdUaGlzIGlzIHRoZSBib2R5IG9mIHRoZSBzZWNvbmQgdGFiJ1xyXG4gICAgfSwge1xyXG4gICAgICBsYWJlbDogJ1RhYiAzJyxcclxuICAgICAgZXh0cmFDb250ZW50OiB0cnVlLFxyXG4gICAgICBjb250ZW50OiAnVGhpcyBpcyB0aGUgYm9keSBvZiB0aGUgdGhpcmQgdGFiJ1xyXG4gICAgfSwge1xyXG4gICAgICBsYWJlbDogJ1RhYiA0JyxcclxuICAgICAgY29udGVudDogJ1RoaXMgaXMgdGhlIGJvZHkgb2YgdGhlIGZvdXJ0aCB0YWInXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGFzeW5jVGFiczogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYXN5bmNUYWJzID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBhbnkpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgb2JzZXJ2ZXIubmV4dCh0aGlzLnRhYnMpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFiKGluY2x1ZGVFeHRyYUNvbnRlbnQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZHluYW1pY1RhYnMuc3BsaWNlKHRoaXMuYWRkVGFiUG9zaXRpb24sIDAsIHtcclxuICAgICAgbGFiZWw6ICdOZXcgVGFiICcgKyAodGhpcy5keW5hbWljVGFicy5sZW5ndGggKyAxKSxcclxuICAgICAgY29udGVudDogJ05ldyB0YWIgY29udGVudHMgJyArICh0aGlzLmR5bmFtaWNUYWJzLmxlbmd0aCArIDEpLFxyXG4gICAgICBleHRyYUNvbnRlbnQ6IGluY2x1ZGVFeHRyYUNvbnRlbnRcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLmdvdG9OZXdUYWJBZnRlckFkZGluZykge1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYkluZGV4ID0gdGhpcy5hZGRUYWJQb3NpdGlvbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZVRhYih0YWI6IGFueSkge1xyXG4gICAgdGhpcy5keW5hbWljVGFicy5zcGxpY2UodGhpcy5keW5hbWljVGFicy5pbmRleE9mKHRhYiksIDEpO1xyXG4gIH1cclxuXHJcbiAgc3dhcFRhYkxpbmtzKCkge1xyXG4gICAgY29uc3QgdGVtcCA9IHRoaXMudGFiTGlua3NbMF07XHJcbiAgICB0aGlzLnRhYkxpbmtzWzBdID0gdGhpcy50YWJMaW5rc1sxXTtcclxuICAgIHRoaXMudGFiTGlua3NbMV0gPSB0ZW1wO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9MYWJlbCgpIHtcclxuICAgIHRoaXMudGFiTGlua3MuZm9yRWFjaChsaW5rID0+IGxpbmsubGFiZWwgKz0gJ2V4dHJhY29udGVudCcpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQmFja2dyb3VuZCgpIHtcclxuICAgIHRoaXMudGFiTmF2QmFja2dyb3VuZCA9IHRoaXMudGFiTmF2QmFja2dyb3VuZCA/IHVuZGVmaW5lZCA6ICdwcmltYXJ5JztcclxuICB9XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc3Vubnktcm91dGVkLWNvbnRlbnQnLFxyXG4gIHRlbXBsYXRlOiAnVGhpcyBpcyB0aGUgcm91dGVkIGJvZHkgb2YgdGhlIHN1bm55IHRhYi4nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VubnlUYWJDb250ZW50Q29tcG9uZW50IHt9XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3JhaW55LXJvdXRlZC1jb250ZW50JyxcclxuICB0ZW1wbGF0ZTogJ1RoaXMgaXMgdGhlIHJvdXRlZCBib2R5IG9mIHRoZSByYWlueSB0YWIuJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhaW55VGFiQ29udGVudENvbXBvbmVudCB7fVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdmb2dneS1yb3V0ZWQtY29udGVudCcsXHJcbiAgdGVtcGxhdGU6ICdUaGlzIGlzIHRoZSByb3V0ZWQgYm9keSBvZiB0aGUgZm9nZ3kgdGFiLicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb2dneVRhYkNvbnRlbnRDb21wb25lbnQge31cclxuXHJcbiJdfQ==
