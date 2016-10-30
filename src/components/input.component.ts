import { Component } from '@angular/core';

Component({
  selector: 'input-component',
  template:`<div><label>Hi I am ImputComponent</label> </div>`
})

export class InputComponent {

  constructor() {
   title : string = "I am Input Component";
  }
}
