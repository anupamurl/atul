"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MdCheckboxDemoNestedChecklistComponent = (function () {
    function MdCheckboxDemoNestedChecklistComponent() {
        this.tasks = [
            {
                name: 'Reminders',
                completed: false,
                subtasks: [
                    { name: 'Cook Dinner', completed: false },
                    { name: 'Read the Material Design Spec', completed: false },
                    { name: 'Upgrade Application to Angular2', completed: false }
                ]
            },
            {
                name: 'Groceries',
                completed: false,
                subtasks: [
                    { name: 'Organic Eggs', completed: false },
                    { name: 'Protein Powder', completed: false },
                    { name: 'Almond Meal Flour', completed: false }
                ]
            }
        ];
    }
    MdCheckboxDemoNestedChecklistComponent.prototype.allComplete = function (task) {
        var subtasks = task.subtasks;
        return subtasks.every(function (t) { return t.completed; }) ? true
            : subtasks.every(function (t) { return !t.completed; }) ? false
                : task.completed;
    };
    MdCheckboxDemoNestedChecklistComponent.prototype.someComplete = function (tasks) {
        var numComplete = tasks.filter(function (t) { return t.completed; }).length;
        return numComplete > 0 && numComplete < tasks.length;
    };
    MdCheckboxDemoNestedChecklistComponent.prototype.setAllCompleted = function (tasks, completed) {
        tasks.forEach(function (t) { return t.completed = completed; });
    };
    MdCheckboxDemoNestedChecklistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-checkbox-demo-nested-checklist',
            styles: ["\n    li {\n      margin-bottom: 4px;\n    }\n  "],
            templateUrl: 'nested-checklist.html',
        })
    ], MdCheckboxDemoNestedChecklistComponent);
    return MdCheckboxDemoNestedChecklistComponent;
}());
exports.MdCheckboxDemoNestedChecklistComponent = MdCheckboxDemoNestedChecklistComponent;
var CheckboxDemoComponent = (function () {
    function CheckboxDemoComponent() {
        this.isIndeterminate = false;
        this.isChecked = false;
        this.isDisabled = false;
        this.alignment = 'start';
        this.useAlternativeColor = false;
    }
    CheckboxDemoComponent.prototype.printResult = function () {
        if (this.isIndeterminate) {
            return 'Maybe!';
        }
        return this.isChecked ? 'Yes!' : 'No!';
    };
    CheckboxDemoComponent.prototype.checkboxColor = function () {
        return this.useAlternativeColor ? 'primary' : 'accent';
    };
    CheckboxDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-checkbox-demo',
            templateUrl: 'checkbox-demo.html',
            styleUrls: ['checkbox-demo.css'],
        })
    ], CheckboxDemoComponent);
    return CheckboxDemoComponent;
}());
exports.CheckboxDemoComponent = CheckboxDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9jaGVja2JveC9jaGVja2JveC1kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBa0IxQztJQVZBO1FBV0UsVUFBSyxHQUFXO1lBQ2Q7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixRQUFRLEVBQUU7b0JBQ1IsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7b0JBQ3pDLEVBQUUsSUFBSSxFQUFFLCtCQUErQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7b0JBQzNELEVBQUUsSUFBSSxFQUFFLGlDQUFpQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7aUJBQzlEO2FBQ0Y7WUFDRDtnQkFDRSxJQUFJLEVBQUUsV0FBVztnQkFDakIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLFFBQVEsRUFBRTtvQkFDUixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtvQkFDMUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtvQkFDNUMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtpQkFDaEQ7YUFDRjtTQUNGLENBQUM7SUFpQkosQ0FBQztJQWZDLDREQUFXLEdBQVgsVUFBWSxJQUFVO1FBQ3BCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxFQUFYLENBQVcsQ0FBQyxHQUFHLElBQUk7Y0FDeEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBWixDQUFZLENBQUMsR0FBRyxLQUFLO2tCQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw2REFBWSxHQUFaLFVBQWEsS0FBYTtRQUN4QixJQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFNBQVMsRUFBWCxDQUFXLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDMUQsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDdkQsQ0FBQztJQUVELGdFQUFlLEdBQWYsVUFBZ0IsS0FBYSxFQUFFLFNBQWtCO1FBQy9DLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFwQ1Usc0NBQXNDO1FBVmxELGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1DQUFtQztZQUM3QyxNQUFNLEVBQUUsQ0FBQyxrREFJUixDQUFDO1lBQ0YsV0FBVyxFQUFFLHVCQUF1QjtTQUNyQyxDQUFDO09BQ1csc0NBQXNDLENBcUNsRDtJQUFELDZDQUFDO0NBckNELEFBcUNDLElBQUE7QUFyQ1ksd0ZBQXNDO0FBNkNuRDtJQU5BO1FBT0Usb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGNBQVMsR0FBVyxPQUFPLENBQUM7UUFDNUIsd0JBQW1CLEdBQVksS0FBSyxDQUFDO0lBWXZDLENBQUM7SUFWQywyQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBRUQsNkNBQWEsR0FBYjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUN6RCxDQUFDO0lBaEJVLHFCQUFxQjtRQU5qQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDO09BQ1cscUJBQXFCLENBaUJqQztJQUFELDRCQUFDO0NBakJELEFBaUJDLElBQUE7QUFqQlksc0RBQXFCIiwiZmlsZSI6ImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9jaGVja2JveC9jaGVja2JveC1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhc2sge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBjb21wbGV0ZWQ6IGJvb2xlYW47XHJcbiAgc3VidGFza3M/OiBUYXNrW107XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdtZC1jaGVja2JveC1kZW1vLW5lc3RlZC1jaGVja2xpc3QnLFxyXG4gIHN0eWxlczogW2BcclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG4gIGBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnbmVzdGVkLWNoZWNrbGlzdC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1kQ2hlY2tib3hEZW1vTmVzdGVkQ2hlY2tsaXN0Q29tcG9uZW50IHtcclxuICB0YXNrczogVGFza1tdID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnUmVtaW5kZXJzJyxcclxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgc3VidGFza3M6IFtcclxuICAgICAgICB7IG5hbWU6ICdDb29rIERpbm5lcicsIGNvbXBsZXRlZDogZmFsc2UgfSxcclxuICAgICAgICB7IG5hbWU6ICdSZWFkIHRoZSBNYXRlcmlhbCBEZXNpZ24gU3BlYycsIGNvbXBsZXRlZDogZmFsc2UgfSxcclxuICAgICAgICB7IG5hbWU6ICdVcGdyYWRlIEFwcGxpY2F0aW9uIHRvIEFuZ3VsYXIyJywgY29tcGxldGVkOiBmYWxzZSB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdHcm9jZXJpZXMnLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBzdWJ0YXNrczogW1xyXG4gICAgICAgIHsgbmFtZTogJ09yZ2FuaWMgRWdncycsIGNvbXBsZXRlZDogZmFsc2UgfSxcclxuICAgICAgICB7IG5hbWU6ICdQcm90ZWluIFBvd2RlcicsIGNvbXBsZXRlZDogZmFsc2UgfSxcclxuICAgICAgICB7IG5hbWU6ICdBbG1vbmQgTWVhbCBGbG91cicsIGNvbXBsZXRlZDogZmFsc2UgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgYWxsQ29tcGxldGUodGFzazogVGFzayk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHN1YnRhc2tzID0gdGFzay5zdWJ0YXNrcztcclxuICAgIHJldHVybiBzdWJ0YXNrcy5ldmVyeSh0ID0+IHQuY29tcGxldGVkKSA/IHRydWVcclxuICAgICAgICA6IHN1YnRhc2tzLmV2ZXJ5KHQgPT4gIXQuY29tcGxldGVkKSA/IGZhbHNlXHJcbiAgICAgICAgOiB0YXNrLmNvbXBsZXRlZDtcclxuICB9XHJcblxyXG4gIHNvbWVDb21wbGV0ZSh0YXNrczogVGFza1tdKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBudW1Db21wbGV0ZSA9IHRhc2tzLmZpbHRlcih0ID0+IHQuY29tcGxldGVkKS5sZW5ndGg7XHJcbiAgICByZXR1cm4gbnVtQ29tcGxldGUgPiAwICYmIG51bUNvbXBsZXRlIDwgdGFza3MubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgc2V0QWxsQ29tcGxldGVkKHRhc2tzOiBUYXNrW10sIGNvbXBsZXRlZDogYm9vbGVhbikge1xyXG4gICAgdGFza3MuZm9yRWFjaCh0ID0+IHQuY29tcGxldGVkID0gY29tcGxldGVkKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdtZC1jaGVja2JveC1kZW1vJyxcclxuICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94LWRlbW8uaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2NoZWNrYm94LWRlbW8uY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveERlbW9Db21wb25lbnQge1xyXG4gIGlzSW5kZXRlcm1pbmF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBhbGlnbm1lbnQ6IHN0cmluZyA9ICdzdGFydCc7XHJcbiAgdXNlQWx0ZXJuYXRpdmVDb2xvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcmludFJlc3VsdCgpIHtcclxuICAgIGlmICh0aGlzLmlzSW5kZXRlcm1pbmF0ZSkge1xyXG4gICAgICByZXR1cm4gJ01heWJlISc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pc0NoZWNrZWQgPyAnWWVzIScgOiAnTm8hJztcclxuICB9XHJcblxyXG4gIGNoZWNrYm94Q29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy51c2VBbHRlcm5hdGl2ZUNvbG9yID8gJ3ByaW1hcnknIDogJ2FjY2VudCc7XHJcbiAgfVxyXG59XHJcbiJdfQ==
