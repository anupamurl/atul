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
var SnackBarDemoComponent = (function () {
    function SnackBarDemoComponent(snackBar) {
        this.snackBar = snackBar;
        this.message = 'Snack Bar opened.';
        this.actionButtonLabel = 'Retry';
        this.action = false;
        this.setAutoHide = true;
        this.autoHide = 0;
    }
    SnackBarDemoComponent.prototype.open = function () {
        var config = new material_1.MdSnackBarConfig();
        config.duration = this.autoHide;
        this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
    };
    SnackBarDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'snack-bar-demo',
            templateUrl: 'snack-bar-demo.html',
        }),
        __metadata("design:paramtypes", [material_1.MdSnackBar])
    ], SnackBarDemoComponent);
    return SnackBarDemoComponent;
}());
exports.SnackBarDemoComponent = SnackBarDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9zbmFjay1iYXIvc25hY2stYmFyLWRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsOENBQWlFO0FBT2pFO0lBT0UsK0JBQ1csUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQVAvQixZQUFPLEdBQVcsbUJBQW1CLENBQUM7UUFDdEMsc0JBQWlCLEdBQVcsT0FBTyxDQUFDO1FBQ3BDLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsYUFBUSxHQUFXLENBQUMsQ0FBQztJQUdjLENBQUM7SUFFcEMsb0NBQUksR0FBSjtRQUNFLElBQUksTUFBTSxHQUFHLElBQUksMkJBQWdCLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBZFUscUJBQXFCO1FBTGpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUscUJBQXFCO1NBQ25DLENBQUM7eUNBU3FCLHFCQUFVO09BUnBCLHFCQUFxQixDQWVqQztJQUFELDRCQUFDO0NBZkQsQUFlQyxJQUFBO0FBZlksc0RBQXFCIiwiZmlsZSI6ImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9zbmFjay1iYXIvc25hY2stYmFyLWRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWRTbmFja0JhciwgTWRTbmFja0JhckNvbmZpZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItZGVtbycsXHJcbiAgdGVtcGxhdGVVcmw6ICdzbmFjay1iYXItZGVtby5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyRGVtb0NvbXBvbmVudCB7XHJcbiAgbWVzc2FnZTogc3RyaW5nID0gJ1NuYWNrIEJhciBvcGVuZWQuJztcclxuICBhY3Rpb25CdXR0b25MYWJlbDogc3RyaW5nID0gJ1JldHJ5JztcclxuICBhY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzZXRBdXRvSGlkZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgYXV0b0hpZGU6IG51bWJlciA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwdWJsaWMgc25hY2tCYXI6IE1kU25hY2tCYXIpIHsgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgbGV0IGNvbmZpZyA9IG5ldyBNZFNuYWNrQmFyQ29uZmlnKCk7XHJcbiAgICBjb25maWcuZHVyYXRpb24gPSB0aGlzLmF1dG9IaWRlO1xyXG4gICAgdGhpcy5zbmFja0Jhci5vcGVuKHRoaXMubWVzc2FnZSwgdGhpcy5hY3Rpb24gJiYgdGhpcy5hY3Rpb25CdXR0b25MYWJlbCwgY29uZmlnKTtcclxuICB9XHJcbn1cclxuIl19
