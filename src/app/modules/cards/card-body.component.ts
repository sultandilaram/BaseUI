import { Component } from '@angular/core';

@Component({
  selector: 'card-body',
  template: `
    <div class="card-body p-1 {{custom_class}}">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardBodyComponent {

  custom_class:string=""

  constructor() { }

  changeColor(color:string): void {
    this.custom_class = color!='light'?"text-light":"text-dark"
  }

}
