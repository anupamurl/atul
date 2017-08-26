"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SelectDemoComponent = (function () {
    function SelectDemoComponent() {
        this.isRequired = false;
        this.isDisabled = false;
        this.showSelect = false;
        this.foodControl = new forms_1.FormControl('pizza-1');
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.drinks = [
            { value: 'coke-0', viewValue: 'Coke' },
            { value: 'sprite-1', viewValue: 'Sprite' },
            { value: 'water-2', viewValue: 'Water' },
            { value: 'pepper-3', viewValue: 'Dr. Pepper' },
            { value: 'coffee-4', viewValue: 'Coffee' },
            { value: 'tea-5', viewValue: 'Tea' },
            { value: 'juice-6', viewValue: 'Orange juice' },
            { value: 'wine-7', viewValue: 'Wine' },
            { value: 'milk-8', viewValue: 'Milk' },
        ];
    }
    SelectDemoComponent.prototype.toggleDisabled = function () {
        this.foodControl.enabled ? this.foodControl.disable() : this.foodControl.enable();
    };
    SelectDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'select-demo',
            templateUrl: 'select-demo.html',
            styleUrls: ['select-demo.css'],
        })
    ], SelectDemoComponent);
    return SelectDemoComponent;
}());
exports.SelectDemoComponent = SelectDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9zZWxlY3Qvc2VsZWN0LWRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsd0NBQTZDO0FBUTdDO0lBTkE7UUFPRSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUduQixnQkFBVyxHQUFHLElBQUksbUJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6QyxVQUFLLEdBQUc7WUFDTixFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztZQUN0QyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztZQUN0QyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztTQUN2QyxDQUFDO1FBRUYsV0FBTSxHQUFHO1lBQ1AsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7WUFDcEMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7WUFDeEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUM7WUFDNUMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUM7WUFDeEMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUM7WUFDbEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUM7WUFDN0MsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7WUFDcEMsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7U0FDckMsQ0FBQztJQU1KLENBQUM7SUFKQyw0Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3BGLENBQUM7SUE1QlUsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztTQUNqQyxDQUFDO09BQ1csbUJBQW1CLENBOEIvQjtJQUFELDBCQUFDO0NBOUJELEFBOEJDLElBQUE7QUE5Qlksa0RBQW1CIiwiZmlsZSI6ImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9zZWxlY3Qvc2VsZWN0LWRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3NlbGVjdC1kZW1vJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWRlbW8uaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnc2VsZWN0LWRlbW8uY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3REZW1vQ29tcG9uZW50IHtcclxuICBpc1JlcXVpcmVkID0gZmFsc2U7XHJcbiAgaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHNob3dTZWxlY3QgPSBmYWxzZTtcclxuICBjdXJyZW50RHJpbms6IHN0cmluZztcclxuICBkcmlua0NvbnRyb2w6IGFueTtcclxuICBmb29kQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgncGl6emEtMScpO1xyXG5cclxuICBmb29kcyA9IFtcclxuICAgIHt2YWx1ZTogJ3N0ZWFrLTAnLCB2aWV3VmFsdWU6ICdTdGVhayd9LFxyXG4gICAge3ZhbHVlOiAncGl6emEtMScsIHZpZXdWYWx1ZTogJ1BpenphJ30sXHJcbiAgICB7dmFsdWU6ICd0YWNvcy0yJywgdmlld1ZhbHVlOiAnVGFjb3MnfVxyXG4gIF07XHJcblxyXG4gIGRyaW5rcyA9IFtcclxuICAgIHt2YWx1ZTogJ2Nva2UtMCcsIHZpZXdWYWx1ZTogJ0Nva2UnfSxcclxuICAgIHt2YWx1ZTogJ3Nwcml0ZS0xJywgdmlld1ZhbHVlOiAnU3ByaXRlJ30sXHJcbiAgICB7dmFsdWU6ICd3YXRlci0yJywgdmlld1ZhbHVlOiAnV2F0ZXInfSxcclxuICAgIHt2YWx1ZTogJ3BlcHBlci0zJywgdmlld1ZhbHVlOiAnRHIuIFBlcHBlcid9LFxyXG4gICAge3ZhbHVlOiAnY29mZmVlLTQnLCB2aWV3VmFsdWU6ICdDb2ZmZWUnfSxcclxuICAgIHt2YWx1ZTogJ3RlYS01Jywgdmlld1ZhbHVlOiAnVGVhJ30sXHJcbiAgICB7dmFsdWU6ICdqdWljZS02Jywgdmlld1ZhbHVlOiAnT3JhbmdlIGp1aWNlJ30sXHJcbiAgICB7dmFsdWU6ICd3aW5lLTcnLCB2aWV3VmFsdWU6ICdXaW5lJ30sXHJcbiAgICB7dmFsdWU6ICdtaWxrLTgnLCB2aWV3VmFsdWU6ICdNaWxrJ30sXHJcbiAgXTtcclxuXHJcbiAgdG9nZ2xlRGlzYWJsZWQoKSB7XHJcbiAgICB0aGlzLmZvb2RDb250cm9sLmVuYWJsZWQgPyB0aGlzLmZvb2RDb250cm9sLmRpc2FibGUoKSA6IHRoaXMuZm9vZENvbnRyb2wuZW5hYmxlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
