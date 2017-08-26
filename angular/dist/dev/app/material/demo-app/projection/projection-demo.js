"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProjectionDemoComponent = (function () {
    function ProjectionDemoComponent() {
        this.binding = 'abc';
    }
    ProjectionDemoComponent = __decorate([
        core_1.Component({
            selector: 'projection-app',
            template: "\n    <div projection-test class=\"demo-inner\">\n      <div class=\"content\">Content: {{ binding }}</div>\n    </div>\n    <br/>\n    <input projection-test [(ngModel)]=\"binding\" [class]=\"binding\" [ngClass]=\"{'blue': true}\">\n    <input [(ngModel)]=\"binding\" class=\"my-class\" [ngClass]=\"{'blue': true}\">\n  ",
            styles: ["\n    .demo-inner {\n      background-color: #DAA520;\n    }\n  "]
        })
    ], ProjectionDemoComponent);
    return ProjectionDemoComponent;
}());
exports.ProjectionDemoComponent = ProjectionDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9wcm9qZWN0aW9uL3Byb2plY3Rpb24tZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUFnRjtBQW1CaEY7SUFoQkE7UUFpQkUsWUFBTyxHQUFXLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRlksdUJBQXVCO1FBaEJuQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsbVVBT1Q7WUFDRCxNQUFNLEVBQUUsQ0FBQyxrRUFJUixDQUFDO1NBQ0gsQ0FBQztPQUNXLHVCQUF1QixDQUVuQztJQUFELDhCQUFDO0NBRkQsQUFFQyxJQUFBO0FBRlksMERBQXVCIiwiZmlsZSI6ImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9wcm9qZWN0aW9uL3Byb2plY3Rpb24tZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vaW1wb3J0IHsgRG9tUHJvamVjdGlvbkhvc3QsIERvbVByb2plY3Rpb24gfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Byb2plY3Rpb24tYXBwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBwcm9qZWN0aW9uLXRlc3QgY2xhc3M9XCJkZW1vLWlubmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+Q29udGVudDoge3sgYmluZGluZyB9fTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnIvPlxyXG4gICAgPGlucHV0IHByb2plY3Rpb24tdGVzdCBbKG5nTW9kZWwpXT1cImJpbmRpbmdcIiBbY2xhc3NdPVwiYmluZGluZ1wiIFtuZ0NsYXNzXT1cInsnYmx1ZSc6IHRydWV9XCI+XHJcbiAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJiaW5kaW5nXCIgY2xhc3M9XCJteS1jbGFzc1wiIFtuZ0NsYXNzXT1cInsnYmx1ZSc6IHRydWV9XCI+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAuZGVtby1pbm5lciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUE1MjA7XHJcbiAgICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2plY3Rpb25EZW1vQ29tcG9uZW50IHtcclxuICBiaW5kaW5nOiBzdHJpbmcgPSAnYWJjJztcclxufVxyXG4iXX0=
