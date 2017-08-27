import { Component , OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {  AuthHttp  } from '../jwt/index';
import { Router } from '@angular/router';


/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})




export class LoginComponent implements OnInit  { 

  result : any;

   public loginForm = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  }); 


  constructor( public  fb: FormBuilder   , private authHttp  : AuthHttp , private router : Router){}


 doLogin( ) { 
  

  this.authHttp.post("http://localhost:3000/auth/login" , {   
       displayName: "ssdfsdf",
      email:  this.loginForm.value['email'],
      password: this.loginForm.value['password'] }).map(response => response.json())
                  .subscribe(result => { 
                    this.result =result ; 
                    
            
                    localStorage.setItem('token' , this.result.token )
                     this.router.navigate(['dashboard']);
                  
                  
                  
                  } , err=> console.log(err) );



      
   
    console.log(this.loginForm.value);


  



  }
  
  

ngOnInit() {




}





}
