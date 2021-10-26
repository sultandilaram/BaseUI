import { Component } from '@angular/core';

@Component({
  selector: 'card-body',
  template: `
    <div class="card-body p-1 {{custom_class}}">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      @import '../../../assets/scss/vars.scss';
    `,
    `
      .card-body {
        background-color: var(--light-color);
      }
    `,
  ]
})
export class CardBodyComponent {

  custom_class:string=""

  constructor() { }

  changeColor(color:string): void {
    this.custom_class = color!='light'?'bg-'+color+" text-light":'bg-'+color+" text-dark"
  }

}
