import { Routes, RouterModule }   from '@angular/router';
import { aboutRoutes } from './about/about.router';
import { demoRoutes } from './material/demo-app/demo-app/routes';
import { loginRoutes } from './login/login.router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  ...aboutRoutes,
  ...demoRoutes,
  ...loginRoutes
];

export const routing = RouterModule.forRoot(routes);
