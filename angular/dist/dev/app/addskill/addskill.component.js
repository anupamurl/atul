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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var AddskillComponent = (function () {
    function AddskillComponent(fb, authHttp, router) {
        this.fb = fb;
        this.authHttp = authHttp;
        this.router = router;
        this.skillForm = this.fb.group({
            image: [''],
            category: [''],
            title: [''],
            sdisc: [''],
            startdate: [''],
            enddate: [''],
            batchsize: [''],
            videourl: [''],
            cdicription: [''],
            wce: ['']
        });
    }
    AddskillComponent.prototype.addSkill = function () {
        var _this = this;
        var data = this.skillForm.value;
        this.authHttp.post("http://localhost:3000/addskill", data).subscribe(function (Response) { console.log(Response); _this.router.navigate(['dashboard']); }, function (err) { console.log(err); });
    };
    AddskillComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-addskill',
            templateUrl: 'addskill.component.html',
            styleUrls: ['addskill.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, index_1.AuthHttp, router_1.Router])
    ], AddskillComponent);
    return AddskillComponent;
}());
exports.AddskillComponent = AddskillComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZGRza2lsbC9hZGRza2lsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsc0NBQTBDO0FBQzFDLHdDQUF5RDtBQUN6RCwwQ0FBeUM7QUFVekM7SUFFRSwyQkFBc0IsRUFBZSxFQUFhLFFBQW9CLEVBQVcsTUFBZTtRQUExRSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQWEsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFXLFdBQU0sR0FBTixNQUFNLENBQVM7UUFPdEYsY0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2hDLEtBQUssRUFBRyxDQUFDLEVBQUUsQ0FBQztZQUNaLFFBQVEsRUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNoQixLQUFLLEVBQUksQ0FBQyxFQUFFLENBQUM7WUFDYixLQUFLLEVBQUcsQ0FBQyxFQUFFLENBQUM7WUFDWixTQUFTLEVBQUssQ0FBQyxFQUFFLENBQUM7WUFDbEIsT0FBTyxFQUFLLENBQUMsRUFBRSxDQUFDO1lBQ2hCLFNBQVMsRUFBSyxDQUFDLEVBQUUsQ0FBQztZQUNsQixRQUFRLEVBQUksQ0FBQyxFQUFFLENBQUM7WUFDaEIsV0FBVyxFQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3BCLEdBQUcsRUFBRyxDQUFDLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FBQztJQWZMLENBQUM7SUFxQkMsb0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBWEYsSUFBSSxJQUFJLEdBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFJakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUUsZ0NBQWdDLEVBQUcsSUFBSSxDQUFHLENBQUMsU0FBUyxDQUN4RSxVQUFBLFFBQVEsSUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFFLENBQWtCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsRUFDOUYsVUFBQSxHQUFHLElBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FFMUIsQ0FBQTtJQUdBLENBQUM7SUF4Q1EsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDO3lDQUcwQixtQkFBVyxFQUF5QixnQkFBUSxFQUFvQixlQUFNO09BRnJGLGlCQUFpQixDQTRDN0I7SUFBRCx3QkFBQztDQTVDRCxBQTRDQyxJQUFBO0FBNUNZLDhDQUFpQiIsImZpbGUiOiJhcHAvYWRkc2tpbGwvYWRkc2tpbGwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7ICBBdXRoSHR0cCAgfSBmcm9tICcuLi9qd3QvaW5kZXgnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgQWJvdXRDb21wb25lbnQuXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnc2QtYWRkc2tpbGwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnYWRkc2tpbGwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydhZGRza2lsbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZHNraWxsQ29tcG9uZW50IHsgXHJcbiBcclxuICBjb25zdHJ1Y3RvciAoIHB1YmxpYyAgZmI6IEZvcm1CdWlsZGVyICAgLCBwcml2YXRlIGF1dGhIdHRwICA6IEF1dGhIdHRwICwgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIgKXtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgcmVzdWx0IDogYW55O1xyXG4gIFxyXG4gICAgIHB1YmxpYyBza2lsbEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgaW1hZ2UgOiBbJyddLFxyXG4gICAgICBjYXRlZ29yeSA6ICBbJyddLFxyXG4gICAgICB0aXRsZSA6ICBbJyddLFxyXG4gICAgICBzZGlzYyA6IFsnJ10sXHJcbiAgICAgIHN0YXJ0ZGF0ZSA6ICAgWycnXSxcclxuICAgICAgZW5kZGF0ZSA6ICAgWycnXSxcclxuICAgICAgYmF0Y2hzaXplIDogICBbJyddLFxyXG4gICAgICB2aWRlb3VybCA6ICBbJyddLFxyXG4gICAgICBjZGljcmlwdGlvbiA6ICAgWycnXSxcclxuICAgICAgd2NlIDogWycnXSBcclxuICAgIH0pOyBcclxuICBcclxuXHJcblxyXG5cclxuXHJcbiAgICBhZGRTa2lsbCgpeyBcclxuIFxyXG4gIFxyXG4gICB2YXIgZGF0YSAgPSB0aGlzLnNraWxsRm9ybS52YWx1ZTtcclxuXHJcbiBcclxuICBcclxuICAgdGhpcy5hdXRoSHR0cC5wb3N0KCBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hZGRza2lsbFwiLCAgZGF0YSAgKS5zdWJzY3JpYmUoIFxyXG4gICBSZXNwb25zZSA9PiB7IGNvbnNvbGUubG9nKFJlc3BvbnNlKSA7ICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQnXSk7ICB9LFxyXG4gICBlcnIgPT4geyBjb25zb2xlLmxvZyhlcnIpIH1cclxuICAgIFxyXG4gICApXHJcblxyXG4gIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
