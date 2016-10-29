import { Component } from '@angular/core';

Component({
  selector: 'input-component',
  template:`<div>{{title}}  </div>`
})

export class InputComponent {

  constructor() {
   title : string = "I am Input Component";
  }
}
