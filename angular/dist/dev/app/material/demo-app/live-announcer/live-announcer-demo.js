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
var LiveAnnouncerDemoComponent = (function () {
    function LiveAnnouncerDemoComponent(live) {
        this.live = live;
    }
    LiveAnnouncerDemoComponent.prototype.announceText = function (message) {
        this.live.announce(message);
    };
    LiveAnnouncerDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'toolbar-demo',
            templateUrl: 'live-announcer-demo.html',
        }),
        __metadata("design:paramtypes", [material_1.LiveAnnouncer])
    ], LiveAnnouncerDemoComponent);
    return LiveAnnouncerDemoComponent;
}());
exports.LiveAnnouncerDemoComponent = LiveAnnouncerDemoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYXRlcmlhbC9kZW1vLWFwcC9saXZlLWFubm91bmNlci9saXZlLWFubm91bmNlci1kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLDhDQUFrRDtBQU9sRDtJQUVFLG9DQUFvQixJQUFtQjtRQUFuQixTQUFJLEdBQUosSUFBSSxDQUFlO0lBQUcsQ0FBQztJQUUzQyxpREFBWSxHQUFaLFVBQWEsT0FBZTtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBTlUsMEJBQTBCO1FBTHRDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDBCQUEwQjtTQUN4QyxDQUFDO3lDQUcwQix3QkFBYTtPQUY1QiwwQkFBMEIsQ0FRdEM7SUFBRCxpQ0FBQztDQVJELEFBUUMsSUFBQTtBQVJZLGdFQUEwQiIsImZpbGUiOiJhcHAvbWF0ZXJpYWwvZGVtby1hcHAvbGl2ZS1hbm5vdW5jZXIvbGl2ZS1hbm5vdW5jZXItZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBMaXZlQW5ub3VuY2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3Rvb2xiYXItZGVtbycsXHJcbiAgdGVtcGxhdGVVcmw6ICdsaXZlLWFubm91bmNlci1kZW1vLmh0bWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGl2ZUFubm91bmNlckRlbW9Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxpdmU6IExpdmVBbm5vdW5jZXIpIHt9XHJcblxyXG4gIGFubm91bmNlVGV4dChtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubGl2ZS5hbm5vdW5jZShtZXNzYWdlKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==
