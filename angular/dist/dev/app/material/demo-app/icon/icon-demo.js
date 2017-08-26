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
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var IconDemoComponent = (function () {
    function IconDemoComponent(mdIconRegistry, sanitizer) {
        mdIconRegistry
            .addSvgIcon('thumb-up', sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/thumbup-icon.svg'))
            .addSvgIconSetInNamespace('core', sanitizer.bypassSecurityTrustResourceUrl('/assets/svg/core-icon-set.svg'))
            .registerFontClassAlias('fontawesome', 'fa');
    }
    IconDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'md-icon-demo',
            templateUrl: 'icon-demo.html',
            styleUrls: ['icon-demo.css'],
            viewProviders: [material_1.MdIconRegistry],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [material_1.MdIconRegistry, platform_browser_1.DomSanitizer])
    ], IconDemoComponent);
    return IconDemoComponent;
}());
exports.IconDemoComponent = IconDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9pY29uL2ljb24tZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUE2RDtBQUM3RCw4REFBeUQ7QUFDekQsOENBQW1EO0FBVW5EO0lBQ0UsMkJBQVksY0FBOEIsRUFBRSxTQUF1QjtRQUNqRSxjQUFjO2FBQ1QsVUFBVSxDQUFDLFVBQVUsRUFDcEIsU0FBUyxDQUFDLDhCQUE4QixDQUFDLDhCQUE4QixDQUFDLENBQUM7YUFDMUUsd0JBQXdCLENBQUMsTUFBTSxFQUM5QixTQUFTLENBQUMsOEJBQThCLENBQUMsK0JBQStCLENBQUMsQ0FBQzthQUMzRSxzQkFBc0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQVJVLGlCQUFpQjtRQVI3QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxnQkFBZ0I7WUFDN0IsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO1lBQzVCLGFBQWEsRUFBRSxDQUFDLHlCQUFjLENBQUM7WUFDL0IsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDdEMsQ0FBQzt5Q0FFNEIseUJBQWMsRUFBYSwrQkFBWTtPQUR4RCxpQkFBaUIsQ0FTN0I7SUFBRCx3QkFBQztDQVRELEFBU0MsSUFBQTtBQVRZLDhDQUFpQiIsImZpbGUiOiJhcHAvbWF0ZXJpYWwvZGVtby1hcHAvaWNvbi9pY29uLWRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBNZEljb25SZWdpc3RyeSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdtZC1pY29uLWRlbW8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnaWNvbi1kZW1vLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydpY29uLWRlbW8uY3NzJ10sXHJcbiAgdmlld1Byb3ZpZGVyczogW01kSWNvblJlZ2lzdHJ5XSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWNvbkRlbW9Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKG1kSWNvblJlZ2lzdHJ5OiBNZEljb25SZWdpc3RyeSwgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICAgIG1kSWNvblJlZ2lzdHJ5XHJcbiAgICAgICAgLmFkZFN2Z0ljb24oJ3RodW1iLXVwJyxcclxuICAgICAgICAgIHNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJy9hc3NldHMvc3ZnL3RodW1idXAtaWNvbi5zdmcnKSlcclxuICAgICAgICAuYWRkU3ZnSWNvblNldEluTmFtZXNwYWNlKCdjb3JlJyxcclxuICAgICAgICAgIHNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJy9hc3NldHMvc3ZnL2NvcmUtaWNvbi1zZXQuc3ZnJykpXHJcbiAgICAgICAgLnJlZ2lzdGVyRm9udENsYXNzQWxpYXMoJ2ZvbnRhd2Vzb21lJywgJ2ZhJyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
