"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_router_1 = require("./about/about.router");
var routes_1 = require("./material/demo-app/demo-app/routes");
var login_router_1 = require("./login/login.router");
exports.routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }
].concat(about_router_1.aboutRoutes, routes_1.demoRoutes, login_router_1.loginRoutes);
exports.routing = router_1.RouterModule.forRoot(exports.routes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUF5RDtBQUN6RCxxREFBbUQ7QUFDbkQsOERBQWlFO0FBQ2pFLHFEQUFtRDtBQUd0QyxRQUFBLE1BQU07SUFDakIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztTQUNoRCwwQkFBVyxFQUNYLG1CQUFVLEVBQ1YsMEJBQVcsRUFFZDtBQUVXLFFBQUEsT0FBTyxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLGNBQU0sQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9hcHAucm91dGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBhYm91dFJvdXRlcyB9IGZyb20gJy4vYWJvdXQvYWJvdXQucm91dGVyJztcclxuaW1wb3J0IHsgZGVtb1JvdXRlcyB9IGZyb20gJy4vbWF0ZXJpYWwvZGVtby1hcHAvZGVtby1hcHAvcm91dGVzJztcclxuaW1wb3J0IHsgbG9naW5Sb3V0ZXMgfSBmcm9tICcuL2xvZ2luL2xvZ2luLnJvdXRlcic7XHJcbiBcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnbG9naW4nLCBwYXRoTWF0Y2g6ICdmdWxsJ30sXHJcbiAgLi4uYWJvdXRSb3V0ZXMsXHJcbiAgLi4uZGVtb1JvdXRlcyxcclxuICAuLi5sb2dpblJvdXRlc1xyXG4gXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyk7XHJcbiJdfQ==
