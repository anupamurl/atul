import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routers';
 
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module'; 
import { AddskillModule } from './addskill/addskill.module'; 
import { DemoAppModule } from './material/demo-app/demo-app-module';
import { FlexLayoutModule } from '@angular/flex-layout';  
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth, AuthModule } from './jwt/index'; 
import { AuthGuard, AuthNotGuard } from './jwt/auth.service';  
 


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    AboutModule,
    DemoAppModule,
    routing,
    AuthModule,
    LoginModule,
    AddskillModule  
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AuthHttp,
    AuthGuard,
    AuthNotGuard,
    provideAuth({
      headerName: 'Authorization',
      headerPrefix: 'bearer',
      tokenName: 'token',
      tokenGetter: (() => localStorage.getItem('token')),
      globalHeaders: [{ 'Content-Type': 'application/json' }],
      noJwtError: true
    })
  ],
  bootstrap: [AppComponent]
}) 
export class AppModule { } 