import { NgModule }           from '@angular/core';
import { loginRouting }            from './login.router';
import { MaterialModule } from '@angular/material';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 

@NgModule({
  imports:      [ loginRouting, MaterialModule , FormsModule , ReactiveFormsModule],
  exports: [LoginComponent],
  declarations: [LoginComponent],
})

export class LoginModule { }
