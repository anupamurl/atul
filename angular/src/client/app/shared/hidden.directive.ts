import { Directive, ElementRef, Renderer , Component , OnInit } from '@angular/core';

 
import { FormBuilder, Validators } from '@angular/forms';
import {  AuthHttp  } from '../jwt/index';
import { Router } from '@angular/router';

// Directive decorator

@Component({
    moduleId: module.id,
    selector: '[myHidden]' ,
    templateUrl: 'leftnavi.html' 
  })
 


// @Directive({ selector: '[myHidden]' })
// Directive class
export class HiddenDirective {
    constructor(el: ElementRef, renderer: Renderer,  public  fb: FormBuilder   , private authHttp  : AuthHttp , private router : Router ) {
     
    }


    logout(){ 

          


        localStorage.removeItem('token'   )
        this.router.navigate(['login']);
     


    }


}