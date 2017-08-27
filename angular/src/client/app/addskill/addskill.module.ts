import { NgModule }           from '@angular/core';
import { addskillRouting }            from './addskill.router';
import { MaterialModule } from '@angular/material';
import { AddskillComponent } from './addskill.component';
 
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports:      [ addskillRouting, MaterialModule  , SharedModule  , FormsModule, ReactiveFormsModule ],
  exports: [AddskillComponent],
  declarations: [AddskillComponent],
})

export class AddskillModule { }
