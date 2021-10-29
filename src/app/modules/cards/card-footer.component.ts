import { Component } from '@angular/core';

@Component({
  selector: 'card-footer',
  template: `
    <div class="card-footer b-t-1 p-1 d-flex content-center {{custom_class}}">
      <ng-content></ng-content>
    </div>
  `
})
export class CardFooterComponent {

  custom_class:string=""

  constructor() { }

  changeColor(color:string): void {
    this.custom_class = color=='light'?'bg-'+color+" text-dark" : color=='dark'? 'text-light' : 'text-light b-color-'+color
  }

}
