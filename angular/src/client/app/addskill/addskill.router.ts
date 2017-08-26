import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';
import {AddskillComponent } from './addskill.component'; 
import { AuthGuard } from '../jwt/auth.service'; 
export const addskillRoutes : Routes = [
  { path: 'addskill', component: AddskillComponent ,  canActivate: [AuthGuard] } 
]; 
export const addskillRouting: ModuleWithProviders = RouterModule.forChild(addskillRoutes);
