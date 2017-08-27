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
var forms_1 = require("@angular/forms");
var index_1 = require("../jwt/index");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(fb, authHttp, router) {
        this.fb = fb;
        this.authHttp = authHttp;
        this.router = router;
        this.loginForm = this.fb.group({
            email: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        this.authHttp.post("http://localhost:3000/auth/login", {
            displayName: "ssdfsdf",
            email: this.loginForm.value['email'],
            password: this.loginForm.value['password']
        }).map(function (response) { return response.json(); })
            .subscribe(function (result) {
            _this.result = result;
            localStorage.setItem('token', _this.result.token);
            _this.router.navigate(['dashboard']);
        }, function (err) { return console.log(err); });
        console.log(this.loginForm.value);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, index_1.AuthHttp, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBbUQ7QUFDbkQsd0NBQXlEO0FBQ3pELHNDQUEwQztBQUMxQywwQ0FBeUM7QUFnQnpDO0lBVUUsd0JBQXFCLEVBQWUsRUFBYSxRQUFvQixFQUFXLE1BQWU7UUFBMUUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFhLGFBQVEsR0FBUixRQUFRLENBQVk7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBTnZGLGNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNoQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDaEMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUc4RixDQUFDO0lBR25HLGdDQUFPLEdBQVA7UUFBQSxpQkE2QkU7UUExQkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0NBQWtDLEVBQUc7WUFDbkQsV0FBVyxFQUFFLFNBQVM7WUFDdkIsS0FBSyxFQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNyQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1NBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDakUsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNmLEtBQUksQ0FBQyxNQUFNLEdBQUUsTUFBTSxDQUFFO1lBR3JCLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFFLENBQUE7WUFDakQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBSXZDLENBQUMsRUFBRyxVQUFBLEdBQUcsSUFBRyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUUsQ0FBQztRQU0zQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFPcEMsQ0FBQztJQUlILGlDQUFRLEdBQVI7SUFLQSxDQUFDO0lBbkRZLGNBQWM7UUFWMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUM7eUNBZXlCLG1CQUFXLEVBQXlCLGdCQUFRLEVBQW9CLGVBQU07T0FWcEYsY0FBYyxDQXlEMUI7SUFBRCxxQkFBQztDQXpERCxBQXlEQyxJQUFBO0FBekRZLHdDQUFjIiwiZmlsZSI6ImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7ICBBdXRoSHR0cCAgfSBmcm9tICcuLi9qd3QvaW5kZXgnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEFib3V0Q29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLWxvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJ2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnbG9naW4uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgIHsgXHJcblxyXG4gIHJlc3VsdCA6IGFueTtcclxuXHJcbiAgIHB1YmxpYyBsb2dpbkZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgIGVtYWlsOiBbXCJcIiwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICBwYXNzd29yZDogW1wiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgfSk7IFxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoIHB1YmxpYyAgZmI6IEZvcm1CdWlsZGVyICAgLCBwcml2YXRlIGF1dGhIdHRwICA6IEF1dGhIdHRwICwgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIpe31cclxuXHJcblxyXG4gZG9Mb2dpbiggKSB7IFxyXG4gIFxyXG5cclxuICB0aGlzLmF1dGhIdHRwLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXV0aC9sb2dpblwiICwgeyAgIFxyXG4gICAgICAgZGlzcGxheU5hbWU6IFwic3NkZnNkZlwiLFxyXG4gICAgICBlbWFpbDogIHRoaXMubG9naW5Gb3JtLnZhbHVlWydlbWFpbCddLFxyXG4gICAgICBwYXNzd29yZDogdGhpcy5sb2dpbkZvcm0udmFsdWVbJ3Bhc3N3b3JkJ10gfSkubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHQgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9cmVzdWx0IDsgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicgLCB0aGlzLnJlc3VsdC50b2tlbiApXHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZGFzaGJvYXJkJ10pO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB9ICwgZXJyPT4gY29uc29sZS5sb2coZXJyKSApO1xyXG5cclxuXHJcblxyXG4gICAgICBcclxuICAgXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxvZ2luRm9ybS52YWx1ZSk7XHJcblxyXG5cclxuICBcclxuXHJcblxyXG5cclxuICB9XHJcbiAgXHJcbiAgXHJcblxyXG5uZ09uSW5pdCgpIHtcclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
