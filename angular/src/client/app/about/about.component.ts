import { Component, OnInit } from '@angular/core';
import { AuthHttp } from '../jwt/index';
import { FormBuilder, Validators } from '@angular/forms';
 

import {Router, ActivatedRoute, Params} from '@angular/router';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
}) 
export class AboutComponent implements OnInit { 
  result: any;
  userId : any = null;
  constructor(public authhttp: AuthHttp ,  private activatedRoute: ActivatedRoute ) { }
 
  getList( ) {
    this.authhttp.get("http://localhost:3000/skilllist").map(response => response.json()).subscribe(
      Response => { this.result = Response },
      err => { }
    )
  }


  getListbyid( id:any ) {
    this.authhttp.get("http://localhost:3000/skilllist/"+ id ).map(response => response.json()).subscribe(
      Response => { this.result = Response },
      err => { }
    )
  }



  ngOnInit() {
   
    this.getList()


    this.activatedRoute.params.subscribe((params: Params) => {
      let userId = params['id']; 
      this.userId = userId;
       if (this.userId){
      this.getListbyid( this.userId ) 
       }
    });




}


  
}
