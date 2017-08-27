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
var index_1 = require("../jwt/index");
var router_1 = require("@angular/router");
var AboutComponent = (function () {
    function AboutComponent(authhttp, activatedRoute) {
        this.authhttp = authhttp;
        this.activatedRoute = activatedRoute;
        this.userId = null;
    }
    AboutComponent.prototype.getList = function () {
        var _this = this;
        this.authhttp.get("http://localhost:3000/skilllist").map(function (response) { return response.json(); }).subscribe(function (Response) { _this.result = Response; }, function (err) { });
    };
    AboutComponent.prototype.getListbyid = function (id) {
        var _this = this;
        this.authhttp.get("http://localhost:3000/skilllist/" + id).map(function (response) { return response.json(); }).subscribe(function (Response) { _this.result = Response; }, function (err) { });
    };
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getList();
        this.activatedRoute.params.subscribe(function (params) {
            var userId = params['id'];
            _this.userId = userId;
            if (_this.userId) {
                _this.getListbyid(_this.userId);
            }
        });
    };
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-about',
            templateUrl: 'about.component.html',
            styleUrls: ['about.component.css']
        }),
        __metadata("design:paramtypes", [index_1.AuthHttp, router_1.ActivatedRoute])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0NBQXdDO0FBSXhDLDBDQUErRDtBQVcvRDtJQUdFLHdCQUFtQixRQUFrQixFQUFZLGNBQThCO1FBQTVELGFBQVEsR0FBUixRQUFRLENBQVU7UUFBWSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFEL0UsV0FBTSxHQUFTLElBQUksQ0FBQztJQUNnRSxDQUFDO0lBRXJGLGdDQUFPLEdBQVA7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FDN0YsVUFBQSxRQUFRLElBQU0sS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUEsQ0FBQyxDQUFDLEVBQ3RDLFVBQUEsR0FBRyxJQUFNLENBQUMsQ0FDWCxDQUFBO0lBQ0gsQ0FBQztJQUdELG9DQUFXLEdBQVgsVUFBYSxFQUFNO1FBQW5CLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUUsRUFBRSxDQUFFLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FDbkcsVUFBQSxRQUFRLElBQU0sS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUEsQ0FBQyxDQUFDLEVBQ3RDLFVBQUEsR0FBRyxJQUFNLENBQUMsQ0FDWCxDQUFBO0lBQ0gsQ0FBQztJQUlELGlDQUFRLEdBQVI7UUFBQSxpQkFnQkQ7UUFkRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7UUFHZCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFjO1lBQ2xELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNwQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLFdBQVcsQ0FBRSxLQUFJLENBQUMsTUFBTSxDQUFFLENBQUE7WUFDOUIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBS1AsQ0FBQztJQXRDWSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQyxDQUFDO3lDQUk2QixnQkFBUSxFQUE0Qix1QkFBYztPQUhwRSxjQUFjLENBMEMxQjtJQUFELHFCQUFDO0NBMUNELEFBMENDLElBQUE7QUExQ1ksd0NBQWMiLCJmaWxlIjoiYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF1dGhIdHRwIH0gZnJvbSAnLi4vand0L2luZGV4JztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbiBcclxuXHJcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgQWJvdXRDb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2QtYWJvdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydhYm91dC5jb21wb25lbnQuY3NzJ11cclxufSkgXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7IFxyXG4gIHJlc3VsdDogYW55O1xyXG4gIHVzZXJJZCA6IGFueSA9IG51bGw7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGF1dGhodHRwOiBBdXRoSHR0cCAsICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSApIHsgfVxyXG4gXHJcbiAgZ2V0TGlzdCggKSB7XHJcbiAgICB0aGlzLmF1dGhodHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9za2lsbGxpc3RcIikubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkuc3Vic2NyaWJlKFxyXG4gICAgICBSZXNwb25zZSA9PiB7IHRoaXMucmVzdWx0ID0gUmVzcG9uc2UgfSxcclxuICAgICAgZXJyID0+IHsgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG4gIGdldExpc3RieWlkKCBpZDphbnkgKSB7XHJcbiAgICB0aGlzLmF1dGhodHRwLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9za2lsbGxpc3QvXCIrIGlkICkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkuc3Vic2NyaWJlKFxyXG4gICAgICBSZXNwb25zZSA9PiB7IHRoaXMucmVzdWx0ID0gUmVzcG9uc2UgfSxcclxuICAgICAgZXJyID0+IHsgfVxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgXHJcbiAgICB0aGlzLmdldExpc3QoKVxyXG5cclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XHJcbiAgICAgIGxldCB1c2VySWQgPSBwYXJhbXNbJ2lkJ107IFxyXG4gICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcclxuICAgICAgIGlmICh0aGlzLnVzZXJJZCl7XHJcbiAgICAgIHRoaXMuZ2V0TGlzdGJ5aWQoIHRoaXMudXNlcklkICkgXHJcbiAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG4gIFxyXG59XHJcbiJdfQ==
