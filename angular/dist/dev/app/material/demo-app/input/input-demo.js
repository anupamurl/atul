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
var max = 5;
var InputDemoComponent = (function () {
    function InputDemoComponent() {
        this.floatingLabel = 'auto';
        this.ctrlDisabled = false;
        this.items = [
            { value: 10 },
            { value: 20 },
            { value: 30 },
            { value: 40 },
            { value: 50 },
        ];
        this.rows = 8;
        this.formControl = new forms_1.FormControl('hello', forms_1.Validators.required);
        this.model = 'hello';
    }
    InputDemoComponent.prototype.addABunch = function (n) {
        for (var x = 0; x < n; x++) {
            this.items.push({ value: ++max });
        }
    };
    InputDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'input-demo',
            templateUrl: 'input-demo.html',
            styleUrls: ['input-demo.css'],
        })
    ], InputDemoComponent);
    return InputDemoComponent;
}());
exports.InputDemoComponent = InputDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9pbnB1dC9pbnB1dC1kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLHdDQUF5RDtBQUd6RCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFRWjtJQU5BO1FBT0Usa0JBQWEsR0FBVyxNQUFNLENBQUM7UUFHL0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFHckIsVUFBSyxHQUFVO1lBQ2IsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2IsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2IsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2IsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2IsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO1NBQ2QsQ0FBQztRQUNGLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxnQkFBVyxHQUFHLElBQUksbUJBQVcsQ0FBQyxPQUFPLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RCxVQUFLLEdBQUcsT0FBTyxDQUFDO0lBT2xCLENBQUM7SUFMQyxzQ0FBUyxHQUFULFVBQVUsQ0FBUztRQUNqQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDO0lBQ0gsQ0FBQztJQXRCVSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsaUJBQWlCO1lBQzlCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxrQkFBa0IsQ0F1QjlCO0lBQUQseUJBQUM7Q0F2QkQsQUF1QkMsSUFBQTtBQXZCWSxnREFBa0IiLCJmaWxlIjoiYXBwL21hdGVyaWFsL2RlbW8tYXBwL2lucHV0L2lucHV0LWRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxubGV0IG1heCA9IDU7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnaW5wdXQtZGVtbycsXHJcbiAgdGVtcGxhdGVVcmw6ICdpbnB1dC1kZW1vLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydpbnB1dC1kZW1vLmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXREZW1vQ29tcG9uZW50IHtcclxuICBmbG9hdGluZ0xhYmVsOiBzdHJpbmcgPSAnYXV0byc7XHJcbiAgZGl2aWRlckNvbG9yOiBib29sZWFuO1xyXG4gIHJlcXVpcmVkRmllbGQ6IGJvb2xlYW47XHJcbiAgY3RybERpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIG5hbWU6IHN0cmluZztcclxuICBpdGVtczogYW55W10gPSBbXHJcbiAgICB7IHZhbHVlOiAxMCB9LFxyXG4gICAgeyB2YWx1ZTogMjAgfSxcclxuICAgIHsgdmFsdWU6IDMwIH0sXHJcbiAgICB7IHZhbHVlOiA0MCB9LFxyXG4gICAgeyB2YWx1ZTogNTAgfSxcclxuICBdO1xyXG4gIHJvd3MgPSA4O1xyXG4gIGZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCdoZWxsbycsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gIG1vZGVsID0gJ2hlbGxvJztcclxuXHJcbiAgYWRkQUJ1bmNoKG46IG51bWJlcikge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBuOyB4KyspIHtcclxuICAgICAgdGhpcy5pdGVtcy5wdXNoKHsgdmFsdWU6ICsrbWF4IH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=
