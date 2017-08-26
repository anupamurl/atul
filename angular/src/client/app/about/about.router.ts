import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';
import { AboutComponent } from './about.component';

import { AuthGuard } from '../jwt/auth.service';

export const aboutRoutes : Routes = [
  { path: 'about', component: AboutComponent ,  canActivate: [AuthGuard] } 
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
