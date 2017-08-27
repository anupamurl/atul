import { NgModule }           from '@angular/core';
import { aboutRouting }            from './about.router';
import { MaterialModule } from '@angular/material';
import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports:      [ aboutRouting, MaterialModule  , SharedModule   , CommonModule  ],
  exports: [AboutComponent],
  declarations: [AboutComponent],
})

export class AboutModule { }
