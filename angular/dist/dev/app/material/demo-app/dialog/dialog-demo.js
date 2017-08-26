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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var DialogDemoComponent = (function () {
    function DialogDemoComponent(dialog, doc) {
        this.dialog = dialog;
        this.config = {
            disableClose: false,
            width: '',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            },
            data: {
                message: 'Jazzy jazz jazz'
            }
        };
        this.numTemplateOpens = 0;
        dialog.afterOpen.subscribe(function (ref) {
            if (!doc.body.classList.contains('no-scroll')) {
                doc.body.classList.add('no-scroll');
            }
        });
        dialog.afterAllClosed.subscribe(function () {
            doc.body.classList.remove('no-scroll');
        });
    }
    DialogDemoComponent.prototype.openJazz = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(JazzDialogComponent, this.config);
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.lastCloseResult = result;
            _this.dialogRef = null;
        });
    };
    DialogDemoComponent.prototype.openContentElement = function () {
        var dialogRef = this.dialog.open(ContentElementDialogComponent, this.config);
        dialogRef.componentInstance.actionsAlignment = this.actionsAlignment;
    };
    DialogDemoComponent.prototype.openTemplate = function () {
        this.numTemplateOpens++;
        this.dialog.open(this.template, this.config);
    };
    __decorate([
        core_1.ViewChild(core_1.TemplateRef),
        __metadata("design:type", core_1.TemplateRef)
    ], DialogDemoComponent.prototype, "template", void 0);
    DialogDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialog-demo',
            templateUrl: 'dialog-demo.html',
            styleUrls: ['dialog-demo.css'],
        }),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [material_1.MdDialog, Object])
    ], DialogDemoComponent);
    return DialogDemoComponent;
}());
exports.DialogDemoComponent = DialogDemoComponent;
var JazzDialogComponent = (function () {
    function JazzDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    JazzDialogComponent = __decorate([
        core_1.Component({
            selector: 'demo-jazz-dialog',
            template: "\n  <p>It's Jazz!</p>\n  <p><label>How much? <input #howMuch></label></p>\n  <p> {{ data.message }} </p>\n  <button type=\"button\" (click)=\"dialogRef.close(howMuch.value)\">Close dialog</button>"
        }),
        __param(1, core_1.Inject(material_1.MD_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MdDialogRef, Object])
    ], JazzDialogComponent);
    return JazzDialogComponent;
}());
exports.JazzDialogComponent = JazzDialogComponent;
var ContentElementDialogComponent = (function () {
    function ContentElementDialogComponent(dialog) {
        this.dialog = dialog;
    }
    ContentElementDialogComponent.prototype.showInStackedDialog = function () {
        this.dialog.open(IFrameDialogComponent);
    };
    ContentElementDialogComponent = __decorate([
        core_1.Component({
            selector: 'demo-content-element-dialog',
            styles: [
                "img {\n      max-width: 100%;\n    }"
            ],
            template: "\n    <h2 md-dialog-title>Neptune</h2>\n    <md-dialog-content>\n      <img src=\"https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg\"/>\n      <p>\n        Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the\n        Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet,\n        and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more\n        massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger\n        than Neptune. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1\n        astronomical units (4.50\u00D7109 km). It is named after the Roman god of the sea and has the\n        astronomical symbol \u2646, a stylised version of the god Neptune's trident.\n      </p>\n    </md-dialog-content>\n    <md-dialog-actions [attr.align]=\"actionsAlignment\">\n      <button\n        md-raised-button\n        color=\"primary\"\n        md-dialog-close>Close</button>\n      <a\n        md-button\n        color=\"primary\"\n        href=\"https://en.wikipedia.org/wiki/Neptune\"\n        target=\"_blank\">Read more on Wikipedia</a>\n      <button\n        md-button\n        color=\"secondary\"\n        (click)=\"showInStackedDialog()\">\n        Show in Dialog</button>\n    </md-dialog-actions>\n  "
        }),
        __metadata("design:paramtypes", [material_1.MdDialog])
    ], ContentElementDialogComponent);
    return ContentElementDialogComponent;
}());
exports.ContentElementDialogComponent = ContentElementDialogComponent;
var IFrameDialogComponent = (function () {
    function IFrameDialogComponent() {
    }
    IFrameDialogComponent = __decorate([
        core_1.Component({
            selector: 'demo-iframe-dialog',
            styles: [
                "iframe {\n      width: 800px;\n    }"
            ],
            template: "\n    <h2 md-dialog-title>Neptune</h2>\n    <md-dialog-content>\n      <iframe frameborder=\"0\" src=\"https://en.wikipedia.org/wiki/Neptune\"></iframe>\n    </md-dialog-content>\n    <md-dialog-actions>\n      <button\n        md-raised-button\n        color=\"primary\"\n        md-dialog-close>Close</button>\n    </md-dialog-actions>\n  "
        })
    ], IFrameDialogComponent);
    return IFrameDialogComponent;
}());
exports.IFrameDialogComponent = IFrameDialogComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9kaWFsb2cvZGlhbG9nLWRlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEU7QUFDMUUsOERBQXFEO0FBQ3JELDhDQUEwRjtBQVExRjtJQXNCRSw2QkFBbUIsTUFBZ0IsRUFBb0IsR0FBUTtRQUE1QyxXQUFNLEdBQU4sTUFBTSxDQUFVO1FBbEJuQyxXQUFNLEdBQW1CO1lBQ3ZCLFlBQVksRUFBRSxLQUFLO1lBQ25CLEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLEVBQUU7WUFDVixRQUFRLEVBQUU7Z0JBQ1IsR0FBRyxFQUFFLEVBQUU7Z0JBQ1AsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLEVBQUU7YUFDVjtZQUNELElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUUsaUJBQWlCO2FBQzNCO1NBQ0YsQ0FBQztRQUNGLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQVFuQixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQXFCO1lBQy9DLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1lBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQWM7WUFDcEQsS0FBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7WUFDOUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0RBQWtCLEdBQWxCO1FBQ0UsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdFLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDdkUsQ0FBQztJQUVELDBDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBakN1QjtRQUF2QixnQkFBUyxDQUFDLGtCQUFXLENBQUM7a0NBQVcsa0JBQVc7eURBQU07SUFwQnhDLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSxrQkFBa0I7WUFDL0IsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7U0FDL0IsQ0FBQztRQXVCc0MsV0FBQSxhQUFNLENBQUMsMkJBQVEsQ0FBQyxDQUFBO3lDQUEzQixtQkFBUTtPQXRCeEIsbUJBQW1CLENBc0QvQjtJQUFELDBCQUFDO0NBdERELEFBc0RDLElBQUE7QUF0RFksa0RBQW1CO0FBaUVoQztJQUNFLDZCQUNTLFNBQTJDLEVBQ25CLElBQVM7UUFEakMsY0FBUyxHQUFULFNBQVMsQ0FBa0M7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBSztJQUFJLENBQUM7SUFIcEMsbUJBQW1CO1FBUi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxzTUFJMkU7U0FDdEYsQ0FBQztRQUlHLFdBQUEsYUFBTSxDQUFDLHlCQUFjLENBQUMsQ0FBQTt5Q0FETCxzQkFBVztPQUZwQixtQkFBbUIsQ0FJL0I7SUFBRCwwQkFBQztDQUpELEFBSUMsSUFBQTtBQUpZLGtEQUFtQjtBQThDaEM7SUFHRSx1Q0FBbUIsTUFBZ0I7UUFBaEIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtJQUFJLENBQUM7SUFFeEMsMkRBQW1CLEdBQW5CO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBUFUsNkJBQTZCO1FBdkN6QyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxNQUFNLEVBQUU7Z0JBQ04sc0NBRUU7YUFDSDtZQUNELFFBQVEsRUFBRSxnM0NBOEJUO1NBQ0YsQ0FBQzt5Q0FJMkIsbUJBQVE7T0FIeEIsNkJBQTZCLENBUXpDO0lBQUQsb0NBQUM7Q0FSRCxBQVFDLElBQUE7QUFSWSxzRUFBNkI7QUE4QjFDO0lBQUE7SUFDQSxDQUFDO0lBRFkscUJBQXFCO1FBcEJqQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixNQUFNLEVBQUU7Z0JBQ04sc0NBRUU7YUFDSDtZQUNELFFBQVEsRUFBRSx1VkFXVDtTQUNGLENBQUM7T0FDVyxxQkFBcUIsQ0FDakM7SUFBRCw0QkFBQztDQURELEFBQ0MsSUFBQTtBQURZLHNEQUFxQiIsImZpbGUiOiJhcHAvbWF0ZXJpYWwvZGVtby1hcHAvZGlhbG9nL2RpYWxvZy1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgTWREaWFsb2csIE1kRGlhbG9nUmVmLCBNZERpYWxvZ0NvbmZpZywgTURfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnZGlhbG9nLWRlbW8nLFxyXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWRlbW8uaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2RpYWxvZy1kZW1vLmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nRGVtb0NvbXBvbmVudCB7XHJcbiAgZGlhbG9nUmVmOiBNZERpYWxvZ1JlZjxKYXp6RGlhbG9nQ29tcG9uZW50PjtcclxuICBsYXN0Q2xvc2VSZXN1bHQ6IHN0cmluZztcclxuICBhY3Rpb25zQWxpZ25tZW50OiBzdHJpbmc7XHJcbiAgY29uZmlnOiBNZERpYWxvZ0NvbmZpZyA9IHtcclxuICAgIGRpc2FibGVDbG9zZTogZmFsc2UsXHJcbiAgICB3aWR0aDogJycsXHJcbiAgICBoZWlnaHQ6ICcnLFxyXG4gICAgcG9zaXRpb246IHtcclxuICAgICAgdG9wOiAnJyxcclxuICAgICAgYm90dG9tOiAnJyxcclxuICAgICAgbGVmdDogJycsXHJcbiAgICAgIHJpZ2h0OiAnJ1xyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgbWVzc2FnZTogJ0phenp5IGphenogamF6eidcclxuICAgIH1cclxuICB9O1xyXG4gIG51bVRlbXBsYXRlT3BlbnMgPSAwO1xyXG5cclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWREaWFsb2csIEBJbmplY3QoRE9DVU1FTlQpIGRvYzogYW55KSB7XHJcbiAgICAvLyBQb3NzaWJsZSB1c2VmdWwgZXhhbXBsZSBmb3IgdGhlIG9wZW4gYW5kIGNsb3NlQWxsIGV2ZW50cy5cclxuICAgIC8vIEFkZGluZyBhIGNsYXNzIHRvIHRoZSBib2R5IGlmIGEgZGlhbG9nIG9wZW5zIGFuZFxyXG4gICAgLy8gcmVtb3ZpbmcgaXQgYWZ0ZXIgYWxsIG9wZW4gZGlhbG9ncyBhcmUgY2xvc2VkXHJcbiAgICBkaWFsb2cuYWZ0ZXJPcGVuLnN1YnNjcmliZSgocmVmOiBNZERpYWxvZ1JlZjxhbnk+KSA9PiB7XHJcbiAgICAgIGlmICghZG9jLmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCduby1zY3JvbGwnKSkge1xyXG4gICAgICAgIGRvYy5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRpYWxvZy5hZnRlckFsbENsb3NlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBkb2MuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb3BlbkphenooKSB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oSmF6ekRpYWxvZ0NvbXBvbmVudCwgdGhpcy5jb25maWcpO1xyXG5cclxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICB0aGlzLmxhc3RDbG9zZVJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgdGhpcy5kaWFsb2dSZWYgPSBudWxsO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvcGVuQ29udGVudEVsZW1lbnQoKSB7XHJcbiAgICBsZXQgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb250ZW50RWxlbWVudERpYWxvZ0NvbXBvbmVudCwgdGhpcy5jb25maWcpO1xyXG4gICAgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLmFjdGlvbnNBbGlnbm1lbnQgPSB0aGlzLmFjdGlvbnNBbGlnbm1lbnQ7XHJcbiAgfVxyXG5cclxuICBvcGVuVGVtcGxhdGUoKSB7XHJcbiAgICB0aGlzLm51bVRlbXBsYXRlT3BlbnMrKztcclxuICAgIHRoaXMuZGlhbG9nLm9wZW4odGhpcy50ZW1wbGF0ZSwgdGhpcy5jb25maWcpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGVtby1qYXp6LWRpYWxvZycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8cD5JdCdzIEphenohPC9wPlxyXG4gIDxwPjxsYWJlbD5Ib3cgbXVjaD8gPGlucHV0ICNob3dNdWNoPjwvbGFiZWw+PC9wPlxyXG4gIDxwPiB7eyBkYXRhLm1lc3NhZ2UgfX0gPC9wPlxyXG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJkaWFsb2dSZWYuY2xvc2UoaG93TXVjaC52YWx1ZSlcIj5DbG9zZSBkaWFsb2c8L2J1dHRvbj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKYXp6RGlhbG9nQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1kRGlhbG9nUmVmPEphenpEaWFsb2dDb21wb25lbnQ+LFxyXG4gICAgQEluamVjdChNRF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkgeyB9XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RlbW8tY29udGVudC1lbGVtZW50LWRpYWxvZycsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfWBcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8aDIgbWQtZGlhbG9nLXRpdGxlPk5lcHR1bmU8L2gyPlxyXG4gICAgPG1kLWRpYWxvZy1jb250ZW50PlxyXG4gICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvNS81Ni9OZXB0dW5lX0Z1bGwuanBnXCIvPlxyXG4gICAgICA8cD5cclxuICAgICAgICBOZXB0dW5lIGlzIHRoZSBlaWdodGggYW5kIGZhcnRoZXN0IGtub3duIHBsYW5ldCBmcm9tIHRoZSBTdW4gaW4gdGhlIFNvbGFyIFN5c3RlbS4gSW4gdGhlXHJcbiAgICAgICAgU29sYXIgU3lzdGVtLCBpdCBpcyB0aGUgZm91cnRoLWxhcmdlc3QgcGxhbmV0IGJ5IGRpYW1ldGVyLCB0aGUgdGhpcmQtbW9zdC1tYXNzaXZlIHBsYW5ldCxcclxuICAgICAgICBhbmQgdGhlIGRlbnNlc3QgZ2lhbnQgcGxhbmV0LiBOZXB0dW5lIGlzIDE3IHRpbWVzIHRoZSBtYXNzIG9mIEVhcnRoIGFuZCBpcyBzbGlnaHRseSBtb3JlXHJcbiAgICAgICAgbWFzc2l2ZSB0aGFuIGl0cyBuZWFyLXR3aW4gVXJhbnVzLCB3aGljaCBpcyAxNSB0aW1lcyB0aGUgbWFzcyBvZiBFYXJ0aCBhbmQgc2xpZ2h0bHkgbGFyZ2VyXHJcbiAgICAgICAgdGhhbiBOZXB0dW5lLiBOZXB0dW5lIG9yYml0cyB0aGUgU3VuIG9uY2UgZXZlcnkgMTY0LjggeWVhcnMgYXQgYW4gYXZlcmFnZSBkaXN0YW5jZSBvZiAzMC4xXHJcbiAgICAgICAgYXN0cm9ub21pY2FsIHVuaXRzICg0LjUww5cxMDkga20pLiBJdCBpcyBuYW1lZCBhZnRlciB0aGUgUm9tYW4gZ29kIG9mIHRoZSBzZWEgYW5kIGhhcyB0aGVcclxuICAgICAgICBhc3Ryb25vbWljYWwgc3ltYm9sIOKZhiwgYSBzdHlsaXNlZCB2ZXJzaW9uIG9mIHRoZSBnb2QgTmVwdHVuZSdzIHRyaWRlbnQuXHJcbiAgICAgIDwvcD5cclxuICAgIDwvbWQtZGlhbG9nLWNvbnRlbnQ+XHJcbiAgICA8bWQtZGlhbG9nLWFjdGlvbnMgW2F0dHIuYWxpZ25dPVwiYWN0aW9uc0FsaWdubWVudFwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgbWQtcmFpc2VkLWJ1dHRvblxyXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgbWQtZGlhbG9nLWNsb3NlPkNsb3NlPC9idXR0b24+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgbWQtYnV0dG9uXHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTmVwdHVuZVwiXHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+UmVhZCBtb3JlIG9uIFdpa2lwZWRpYTwvYT5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG1kLWJ1dHRvblxyXG4gICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAoY2xpY2spPVwic2hvd0luU3RhY2tlZERpYWxvZygpXCI+XHJcbiAgICAgICAgU2hvdyBpbiBEaWFsb2c8L2J1dHRvbj5cclxuICAgIDwvbWQtZGlhbG9nLWFjdGlvbnM+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGVudEVsZW1lbnREaWFsb2dDb21wb25lbnQge1xyXG4gIGFjdGlvbnNBbGlnbm1lbnQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWREaWFsb2cpIHsgfVxyXG5cclxuICBzaG93SW5TdGFja2VkRGlhbG9nKCkge1xyXG4gICAgdGhpcy5kaWFsb2cub3BlbihJRnJhbWVEaWFsb2dDb21wb25lbnQpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkZW1vLWlmcmFtZS1kaWFsb2cnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYGlmcmFtZSB7XHJcbiAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgIH1gXHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGgyIG1kLWRpYWxvZy10aXRsZT5OZXB0dW5lPC9oMj5cclxuICAgIDxtZC1kaWFsb2ctY29udGVudD5cclxuICAgICAgPGlmcmFtZSBmcmFtZWJvcmRlcj1cIjBcIiBzcmM9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9OZXB0dW5lXCI+PC9pZnJhbWU+XHJcbiAgICA8L21kLWRpYWxvZy1jb250ZW50PlxyXG4gICAgPG1kLWRpYWxvZy1hY3Rpb25zPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgbWQtcmFpc2VkLWJ1dHRvblxyXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgbWQtZGlhbG9nLWNsb3NlPkNsb3NlPC9idXR0b24+XHJcbiAgICA8L21kLWRpYWxvZy1hY3Rpb25zPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIElGcmFtZURpYWxvZ0NvbXBvbmVudCB7XHJcbn1cclxuIl19
