"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hidden_directive_1 = require("./hidden.directive");
var router_1 = require("@angular/router");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                hidden_directive_1.HiddenDirective
            ],
            exports: [
                hidden_directive_1.HiddenDirective
            ], imports: [
                router_1.RouterModule
            ],
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUV6Qyx1REFBcUQ7QUFFckQsMENBQStDO0FBbUIvQztJQUFBO0lBQTBCLENBQUM7SUFBZCxZQUFZO1FBWnhCLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDVixrQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxrQ0FBZTthQUNsQixFQUFJLE9BQU8sRUFBRTtnQkFFVixxQkFBWTthQUNiO1NBRU4sQ0FBQztPQUNXLFlBQVksQ0FBRTtJQUFELG1CQUFDO0NBQTNCLEFBQTJCLElBQUE7QUFBZCxvQ0FBWSIsImZpbGUiOiJhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSGlkZGVuRGlyZWN0aXZlIH0gZnJvbSAnLi9oaWRkZW4uZGlyZWN0aXZlJztcclxuIFxyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcbiBcclxuIFxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIaWRkZW5EaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgSGlkZGVuRGlyZWN0aXZlICAgXHJcbiAgICBdLCAgIGltcG9ydHM6IFtcclxuICAgICBcclxuICAgICAgICBSb3V0ZXJNb2R1bGVcclxuICAgICAgXSxcclxuIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxle30iXX0=
