"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var addskill_component_1 = require("./addskill.component");
var auth_service_1 = require("../jwt/auth.service");
exports.addskillRoutes = [
    { path: 'addskill', component: addskill_component_1.AddskillComponent, canActivate: [auth_service_1.AuthGuard] }
];
exports.addskillRouting = router_1.RouterModule.forChild(exports.addskillRoutes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZGRza2lsbC9hZGRza2lsbC5yb3V0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwwQ0FBK0Q7QUFDL0QsMkRBQXdEO0FBQ3hELG9EQUFnRDtBQUNuQyxRQUFBLGNBQWMsR0FBWTtJQUNyQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFJLFdBQVcsRUFBRSxDQUFDLHdCQUFTLENBQUMsRUFBRTtDQUMvRSxDQUFDO0FBQ1csUUFBQSxlQUFlLEdBQXdCLHFCQUFZLENBQUMsUUFBUSxDQUFDLHNCQUFjLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvYWRkc2tpbGwvYWRkc2tpbGwucm91dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9ICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gICAgICAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0FkZHNraWxsQ29tcG9uZW50IH0gZnJvbSAnLi9hZGRza2lsbC5jb21wb25lbnQnOyBcclxuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi4vand0L2F1dGguc2VydmljZSc7IFxyXG5leHBvcnQgY29uc3QgYWRkc2tpbGxSb3V0ZXMgOiBSb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiAnYWRkc2tpbGwnLCBjb21wb25lbnQ6IEFkZHNraWxsQ29tcG9uZW50ICwgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSB9IFxyXG5dOyBcclxuZXhwb3J0IGNvbnN0IGFkZHNraWxsUm91dGluZzogTW9kdWxlV2l0aFByb3ZpZGVycyA9IFJvdXRlck1vZHVsZS5mb3JDaGlsZChhZGRza2lsbFJvdXRlcyk7XHJcbiJdfQ==
