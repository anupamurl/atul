import { NgModule }           from '@angular/core';
import { addskillRouting }            from './addskill.router';
import { MaterialModule } from '@angular/material';
import { AddskillComponent } from './addskill.component';
 
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports:      [ addskillRouting, MaterialModule  , SharedModule  ],
  exports: [AddskillComponent],
  declarations: [AddskillComponent],
})

export class AddskillModule { }
