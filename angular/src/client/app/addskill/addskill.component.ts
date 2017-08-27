import { Component } from '@angular/core';
import {  AuthHttp  } from '../jwt/index';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-addskill',
  templateUrl: 'addskill.component.html',
  styleUrls: ['addskill.component.css']
})
export class AddskillComponent { 
 
  constructor ( public  fb: FormBuilder   , private authHttp  : AuthHttp , private router : Router ){


  }

  result : any;
  
     public skillForm = this.fb.group({
      image : [''],
      category :  [''],
      title :  [''],
      sdisc : [''],
      startdate :   [''],
      enddate :   [''],
      batchsize :   [''],
      videourl :  [''],
      cdicription :   [''],
      wce : [''] 
    }); 
  




    addSkill(){ 
 
  
   var data  = this.skillForm.value;

 
  
   this.authHttp.post( "http://localhost:3000/addskill",  data  ).subscribe( 
   Response => { console.log(Response) ;                  this.router.navigate(['dashboard']);  },
   err => { console.log(err) }
    
   )

  
    }



}
