import {
  AfterViewInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { AccordionItemComponent } from './accordion-item.component';

@Component({
  selector: 'accordion',
  template: ` <div><ng-content select="accordion-item"></ng-content></div> `,
  styles: [
    `
      @import '../../../assets/scss/vars.scss';
    `,
    `
      div {
        width: 100%;
        height: max-content;
        box-shadow: var(--card-shadow);
        font-size: var(--font-size);
        color: var(--text-color);
        background-color: var(--light-color);
        border-radius: 0.5rem;
        overflow: hidden;
      }
    `,
  ],
})
export class AccordionComponent implements AfterViewInit {
  @ContentChildren(AccordionItemComponent)
  accordionItems: QueryList<AccordionItemComponent>;
  @Input() multiple: boolean;

  constructor() {}

  ngAfterViewInit(): void {
    this.accordionItems.forEach((element: AccordionItemComponent) => {
      element.toggleEvent.subscribe((event) => {
        if (element.show == true) {
          element.show = false;
        } else {
          if (typeof this.multiple == 'undefined' && !this.multiple) {
            this.closeAll();
          }
          element.show = true;
        }
      });
    });
  }

  closeAll() {
    this.accordionItems.forEach((element: AccordionItemComponent) => {
      element.show = false;
    });
  }
}
