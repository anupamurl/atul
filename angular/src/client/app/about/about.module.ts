import { NgModule }           from '@angular/core';
import { aboutRouting }            from './about.router';
import { MaterialModule } from '@angular/material';
import { AboutComponent } from './about.component';
 
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports:      [ aboutRouting, MaterialModule  , SharedModule  ],
  exports: [AboutComponent],
  declarations: [AboutComponent],
})

export class AboutModule { }
