import { Component } from '@angular/core';

@Component({
  selector: 'card-header',
  template: `
    <div class="card-header border-b-1 p-1 {{background_class}}">
      <h2 class="subheading {{text_class}}"> <ng-content></ng-content> </h2>
    </div>
  `,
  styles: [
    `
      @import '../../../assets/scss/vars.scss';
    `,
    `
      .card-header {
        background-color: var(--light-color);
      }
    `,
  ]
})
export class CardHeaderComponent {

  background_class:string=""
  text_class:string=""

  constructor() { }

  changeColor(color:string): void {
    this.background_class = (color=='light' || color=='dark')?'bg-'+color : 'bg-'+color+" border-color-"+color
    this.text_class = color=='light'?"text-dark":"text-light"
  }

}
