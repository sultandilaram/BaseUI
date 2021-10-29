import { Component } from '@angular/core';

@Component({
  selector: 'card-header',
  template: `
    <div class="card-header b-b-1 p-1 {{border_class}}">
      <h2 class="subheading {{text_class}}"> <ng-content></ng-content> </h2>
    </div>
  `
})
export class CardHeaderComponent {

  border_class:string=""
  text_class:string=""

  constructor() { }

  changeColor(color:string): void {
    this.border_class = (color=='light' || color=='dark')?'': " b-color-"+color
    this.text_class = color=='light'?"text-dark":"text-light"
  }

}
