import { NgModule } from '@angular/core';

import { HiddenDirective } from './hidden.directive';
 
import { RouterModule } from '@angular/router';


 
 


@NgModule({
    declarations: [
        HiddenDirective
    ],
    exports: [
        HiddenDirective   
    ],   imports: [
     
        RouterModule
      ],
 
})
export class SharedModule{}