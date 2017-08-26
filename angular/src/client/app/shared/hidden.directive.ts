import { Directive, ElementRef, Renderer , Component } from '@angular/core';

// Directive decorator

@Component({
    moduleId: module.id,
    selector: '[myHidden]' ,
    templateUrl: 'leftnavi.html' 
  })
 


// @Directive({ selector: '[myHidden]' })
// Directive class
export class HiddenDirective {
    constructor(el: ElementRef, renderer: Renderer) {
     
    }
}