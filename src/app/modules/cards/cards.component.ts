import { AfterContentInit, Component, Input, ContentChild } from '@angular/core';
import { CardBodyComponent } from './card-body.component';
import { CardFooterComponent } from './card-footer.component';
import { CardHeaderComponent } from './card-header.component';

@Component({
  selector: 'card',
  template: `
    <div class="card box-rounded">
      <ng-content select="card-header"></ng-content>
      <ng-content select="card-body"></ng-content>
      <ng-content select="card-footer"></ng-content>
    </div>
  `,
  styles: [
    `
      @import '../../../assets/scss/vars.scss';
    `,
    `
      .card {
        box-shadow: var(--card-shadow);
        height: max-content;
        overflow: hidden;
      }
    `,
  ]
})
export class CardsComponent implements AfterContentInit {

  @Input() color:string;

  @ContentChild(CardHeaderComponent) card_header: CardHeaderComponent
  @ContentChild(CardBodyComponent) card_body: CardBodyComponent
  @ContentChild(CardFooterComponent) card_footer: CardFooterComponent

  constructor() {}

  ngAfterContentInit(): void {
    if(this.color){
      this.card_header.changeColor(this.color)
      this.card_body.changeColor(this.color)
      this.card_footer.changeColor(this.color)
    }
  }
}
