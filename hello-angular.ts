import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'hello-angular',
  template: '<h1>{{saludo}}</h1>'
})
class HelloAngularComponent {
  saludo: string;
  constructor() {
    this.saludo = 'Hola angular';
  }
}

bootstrap(HelloAngularComponent)
