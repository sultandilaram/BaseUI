import { Component } from '@angular/core';

@Component({
  selector: 'card-footer',
  template: `
    <div class="card-footer border-t-1 p-1 d-flex justify-content-center {{custom_class}}">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      @import '../../../assets/scss/vars.scss';
    `,
    `
      .card-footer {
        background-color: var(--light-color);
      }
    `,
  ]
})
export class CardFooterComponent {

  custom_class:string=""

  constructor() { }

  changeColor(color:string): void {
    this.custom_class = color=='light'?'bg-'+color+" text-dark" : color=='dark'? 'bg-'+color+' text-light' : 'bg-'+color+' text-light border-color-'+color
  }

}
