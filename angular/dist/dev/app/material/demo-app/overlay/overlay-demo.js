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
var OverlayDemoComponent = (function () {
    function OverlayDemoComponent(overlay, viewContainerRef) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nextPosition = 0;
        this.isMenuOpen = false;
        this.tortelliniFillings = ['cheese and spinach', 'mushroom and broccoli'];
    }
    OverlayDemoComponent.prototype.openRotiniPanel = function () {
        var config = new material_1.OverlayState();
        config.positionStrategy = this.overlay.position()
            .global()
            .left(this.nextPosition + "px")
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(new material_1.ComponentPortal(RotiniPanelComponent, this.viewContainerRef));
    };
    OverlayDemoComponent.prototype.openFusilliPanel = function () {
        var config = new material_1.OverlayState();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .top(this.nextPosition + "px");
        this.nextPosition += 30;
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
    };
    OverlayDemoComponent.prototype.openSpaghettiPanel = function () {
        var strategy = this.overlay.position()
            .connectedTo(this._overlayOrigin.elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' });
        var config = new material_1.OverlayState();
        config.positionStrategy = strategy;
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(new material_1.ComponentPortal(SpagettiPanelComponent, this.viewContainerRef));
    };
    OverlayDemoComponent.prototype.openTortelliniPanel = function () {
        var strategy = this.overlay.position()
            .connectedTo(this.tortelliniOrigin.elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' });
        var config = new material_1.OverlayState();
        config.positionStrategy = strategy;
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(this.tortelliniTemplate);
    };
    OverlayDemoComponent.prototype.openPanelWithBackdrop = function () {
        var config = new material_1.OverlayState();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally();
        config.hasBackdrop = true;
        config.backdropClass = 'cdk-overlay-transparent-backdrop';
        var overlayRef = this.overlay.create(config);
        overlayRef.attach(this.templatePortals.first);
        overlayRef.backdropClick().subscribe(function () { return overlayRef.detach(); });
    };
    __decorate([
        core_1.ViewChildren(material_1.TemplatePortalDirective),
        __metadata("design:type", core_1.QueryList)
    ], OverlayDemoComponent.prototype, "templatePortals", void 0);
    __decorate([
        core_1.ViewChild(material_1.OverlayOrigin),
        __metadata("design:type", material_1.OverlayOrigin)
    ], OverlayDemoComponent.prototype, "_overlayOrigin", void 0);
    __decorate([
        core_1.ViewChild('tortelliniOrigin'),
        __metadata("design:type", material_1.OverlayOrigin)
    ], OverlayDemoComponent.prototype, "tortelliniOrigin", void 0);
    __decorate([
        core_1.ViewChild('tortelliniTemplate'),
        __metadata("design:type", material_1.TemplatePortalDirective)
    ], OverlayDemoComponent.prototype, "tortelliniTemplate", void 0);
    OverlayDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'overlay-demo',
            templateUrl: 'overlay-demo.html',
            styleUrls: ['overlay-demo.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [material_1.Overlay, core_1.ViewContainerRef])
    ], OverlayDemoComponent);
    return OverlayDemoComponent;
}());
exports.OverlayDemoComponent = OverlayDemoComponent;
var RotiniPanelComponent = (function () {
    function RotiniPanelComponent() {
        this.value = 9000;
    }
    RotiniPanelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rotini-panel',
            template: '<p class="demo-rotini">Rotini {{ value }}</p>'
        })
    ], RotiniPanelComponent);
    return RotiniPanelComponent;
}());
exports.RotiniPanelComponent = RotiniPanelComponent;
var SpagettiPanelComponent = (function () {
    function SpagettiPanelComponent() {
        this.value = 'Omega';
    }
    SpagettiPanelComponent = __decorate([
        core_1.Component({
            selector: 'spagetti-panel',
            template: '<div class="demo-spagetti">Spagetti {{ value }}</div>'
        })
    ], SpagettiPanelComponent);
    return SpagettiPanelComponent;
}());
exports.SpagettiPanelComponent = SpagettiPanelComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9vdmVybGF5L292ZXJsYXktZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQU91QjtBQUN2Qiw4Q0FVMkI7QUFTM0I7SUFVRSw4QkFBbUIsT0FBZ0IsRUFBUyxnQkFBa0M7UUFBM0QsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFUOUUsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1Qix1QkFBa0IsR0FBRyxDQUFDLG9CQUFvQixFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFPYSxDQUFDO0lBRW5GLDhDQUFlLEdBQWY7UUFDRSxJQUFJLE1BQU0sR0FBRyxJQUFJLHVCQUFZLEVBQUUsQ0FBQztRQUVoQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7YUFDNUMsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFJLElBQUksQ0FBQyxZQUFZLE9BQUksQ0FBQzthQUM5QixHQUFHLENBQUksSUFBSSxDQUFDLFlBQVksT0FBSSxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7UUFFeEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLDBCQUFlLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQsK0NBQWdCLEdBQWhCO1FBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSx1QkFBWSxFQUFFLENBQUM7UUFFaEMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2FBQzVDLE1BQU0sRUFBRTthQUNSLGtCQUFr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O0lBUmxFLG9CQUFvQjtRQVBoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFDL0IsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7U0FDdEMsQ0FBQzt5Q0FXNEIsa0JBQU8sRUFBMkIsdUJBQWdCO09BVm5FLG9CQUFvQixDQW9GaEM7SUFBRCwyQkFBQztDQXBGRCxBQW9GQyxJQUFBO0FBcEZZLG9EQUFvQjtBQTRGakM7SUFMQTtRQU1FLFVBQUssR0FBVyxJQUFJLENBQUM7SUFDdkIsQ0FBQztJQUZZLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSwrQ0FBK0M7U0FDMUQsQ0FBQztPQUNXLG9CQUFvQixDQUVoQztJQUFELDJCQUFDO0NBRkQsQUFFQyxJQUFBO0FBRlksb0RBQW9CO0FBU2pDO0lBSkE7UUFLRSxVQUFLLEdBQVcsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFGWSxzQkFBc0I7UUFKbEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLHVEQUF1RDtTQUNsRSxDQUFDO09BQ1csc0JBQXNCLENBRWxDO0lBQUQsNkJBQUM7Q0FGRCxBQUVDLElBQUE7QUFGWSx3REFBc0IiLCJmaWxlIjoiYXBwL21hdGVyaWFsL2RlbW8tYXBwL292ZXJsYXkvb3ZlcmxheS1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIFZpZXdDaGlsZHJlbixcclxuICAgIFF1ZXJ5TGlzdCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgVmlld0NvbnRhaW5lclJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICAgIE92ZXJsYXksXHJcbiAgICBPdmVybGF5U3RhdGUsXHJcbiAgICBPdmVybGF5T3JpZ2luLFxyXG4gICAgQ29tcG9uZW50UG9ydGFsLFxyXG4gICAgLy8gVGhpcyBpbXBvcnQgaXMgb25seSB1c2VkIHRvIGRlZmluZSBhIGdlbmVyaWMgdHlwZS4gVGhlIGN1cnJlbnQgVHlwZVNjcmlwdCB2ZXJzaW9uIGluY29ycmVjdGx5XHJcbiAgICAvLyBjb25zaWRlcnMgc3VjaCBpbXBvcnRzIGFzIHVudXNlZCAoaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xNDk1MylcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtdmFyaWFibGVcclxuICAgIFBvcnRhbCxcclxuICAgIFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdvdmVybGF5LWRlbW8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnb3ZlcmxheS1kZW1vLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydvdmVybGF5LWRlbW8uY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE92ZXJsYXlEZW1vQ29tcG9uZW50IHtcclxuICBuZXh0UG9zaXRpb246IG51bWJlciA9IDA7XHJcbiAgaXNNZW51T3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHRvcnRlbGxpbmlGaWxsaW5ncyA9IFsnY2hlZXNlIGFuZCBzcGluYWNoJywgJ211c2hyb29tIGFuZCBicm9jY29saSddO1xyXG5cclxuICBAVmlld0NoaWxkcmVuKFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlKSB0ZW1wbGF0ZVBvcnRhbHM6IFF1ZXJ5TGlzdDxQb3J0YWw8YW55Pj47XHJcbiAgQFZpZXdDaGlsZChPdmVybGF5T3JpZ2luKSBfb3ZlcmxheU9yaWdpbjogT3ZlcmxheU9yaWdpbjtcclxuICBAVmlld0NoaWxkKCd0b3J0ZWxsaW5pT3JpZ2luJykgdG9ydGVsbGluaU9yaWdpbjogT3ZlcmxheU9yaWdpbjtcclxuICBAVmlld0NoaWxkKCd0b3J0ZWxsaW5pVGVtcGxhdGUnKSB0b3J0ZWxsaW5pVGVtcGxhdGU6IFRlbXBsYXRlUG9ydGFsRGlyZWN0aXZlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb3ZlcmxheTogT3ZlcmxheSwgcHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG5cclxuICBvcGVuUm90aW5pUGFuZWwoKSB7XHJcbiAgICBsZXQgY29uZmlnID0gbmV3IE92ZXJsYXlTdGF0ZSgpO1xyXG5cclxuICAgIGNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcclxuICAgICAgICAuZ2xvYmFsKClcclxuICAgICAgICAubGVmdChgJHt0aGlzLm5leHRQb3NpdGlvbn1weGApXHJcbiAgICAgICAgLnRvcChgJHt0aGlzLm5leHRQb3NpdGlvbn1weGApO1xyXG5cclxuICAgIHRoaXMubmV4dFBvc2l0aW9uICs9IDMwO1xyXG5cclxuICAgIGxldCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xyXG4gICAgb3ZlcmxheVJlZi5hdHRhY2gobmV3IENvbXBvbmVudFBvcnRhbChSb3RpbmlQYW5lbENvbXBvbmVudCwgdGhpcy52aWV3Q29udGFpbmVyUmVmKSk7XHJcbiAgfVxyXG5cclxuICBvcGVuRnVzaWxsaVBhbmVsKCkge1xyXG4gICAgbGV0IGNvbmZpZyA9IG5ldyBPdmVybGF5U3RhdGUoKTtcclxuXHJcbiAgICBjb25maWcucG9zaXRpb25TdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXHJcbiAgICAgICAgLmdsb2JhbCgpXHJcbiAgICAgICAgLmNlbnRlckhvcml6b250YWxseSgpXHJcbiAgICAgICAgLnRvcChgJHt0aGlzLm5leHRQb3NpdGlvbn1weGApO1xyXG5cclxuICAgIHRoaXMubmV4dFBvc2l0aW9uICs9IDMwO1xyXG5cclxuICAgIGxldCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xyXG4gICAgb3ZlcmxheVJlZi5hdHRhY2godGhpcy50ZW1wbGF0ZVBvcnRhbHMuZmlyc3QpO1xyXG4gIH1cclxuXHJcbiAgb3BlblNwYWdoZXR0aVBhbmVsKCkge1xyXG4gICAgLy8gVE9ETyhqZWxib3Vybik6IHNlcGFyYXRlIG92ZXJsYXkgZGVtbyBmb3IgY29ubmVjdGVkIHBvc2l0aW9uaW5nLlxyXG4gICAgbGV0IHN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcclxuICAgICAgICAuY29ubmVjdGVkVG8oXHJcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlPcmlnaW4uZWxlbWVudFJlZixcclxuICAgICAgICAgICAge29yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nfSxcclxuICAgICAgICAgICAge292ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCd9ICk7XHJcblxyXG4gICAgbGV0IGNvbmZpZyA9IG5ldyBPdmVybGF5U3RhdGUoKTtcclxuICAgIGNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5ID0gc3RyYXRlZ3k7XHJcblxyXG4gICAgbGV0IG92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZyk7XHJcbiAgICBvdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKFNwYWdldHRpUGFuZWxDb21wb25lbnQsIHRoaXMudmlld0NvbnRhaW5lclJlZikpO1xyXG4gIH1cclxuXHJcbiAgb3BlblRvcnRlbGxpbmlQYW5lbCgpIHtcclxuICAgIGxldCBzdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXHJcbiAgICAgICAgLmNvbm5lY3RlZFRvKFxyXG4gICAgICAgICAgICB0aGlzLnRvcnRlbGxpbmlPcmlnaW4uZWxlbWVudFJlZixcclxuICAgICAgICAgICAge29yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nfSxcclxuICAgICAgICAgICAge292ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnfSApO1xyXG5cclxuICAgIGxldCBjb25maWcgPSBuZXcgT3ZlcmxheVN0YXRlKCk7XHJcbiAgICBjb25maWcucG9zaXRpb25TdHJhdGVneSA9IHN0cmF0ZWd5O1xyXG5cclxuICAgIGxldCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xyXG5cclxuICAgIG92ZXJsYXlSZWYuYXR0YWNoKHRoaXMudG9ydGVsbGluaVRlbXBsYXRlKTtcclxuICB9XHJcblxyXG4gIG9wZW5QYW5lbFdpdGhCYWNrZHJvcCgpIHtcclxuICAgIGxldCBjb25maWcgPSBuZXcgT3ZlcmxheVN0YXRlKCk7XHJcblxyXG4gICAgY29uZmlnLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKVxyXG4gICAgICAuZ2xvYmFsKClcclxuICAgICAgLmNlbnRlckhvcml6b250YWxseSgpO1xyXG4gICAgY29uZmlnLmhhc0JhY2tkcm9wID0gdHJ1ZTtcclxuICAgIGNvbmZpZy5iYWNrZHJvcENsYXNzID0gJ2Nkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJztcclxuXHJcbiAgICBsZXQgb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoY29uZmlnKTtcclxuICAgIG92ZXJsYXlSZWYuYXR0YWNoKHRoaXMudGVtcGxhdGVQb3J0YWxzLmZpcnN0KTtcclxuICAgIG92ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpLnN1YnNjcmliZSgoKSA9PiBvdmVybGF5UmVmLmRldGFjaCgpKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiogU2ltcGxlIGNvbXBvbmVudCB0byBsb2FkIGludG8gYW4gb3ZlcmxheSAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAncm90aW5pLXBhbmVsJyxcclxuICB0ZW1wbGF0ZTogJzxwIGNsYXNzPVwiZGVtby1yb3RpbmlcIj5Sb3Rpbmkge3sgdmFsdWUgfX08L3A+J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUm90aW5pUGFuZWxDb21wb25lbnQge1xyXG4gIHZhbHVlOiBudW1iZXIgPSA5MDAwO1xyXG59XHJcblxyXG4vKiogU2ltcGxlIGNvbXBvbmVudCB0byBsb2FkIGludG8gYW4gb3ZlcmxheSAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NwYWdldHRpLXBhbmVsJyxcclxuICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJkZW1vLXNwYWdldHRpXCI+U3BhZ2V0dGkge3sgdmFsdWUgfX08L2Rpdj4nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGFnZXR0aVBhbmVsQ29tcG9uZW50IHtcclxuICB2YWx1ZTogc3RyaW5nID0gJ09tZWdhJztcclxufVxyXG4iXX0=
