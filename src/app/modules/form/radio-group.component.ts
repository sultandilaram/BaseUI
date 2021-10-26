import { Component, Input, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RadioComponent } from './radio.component';

@Component({
  selector: 'radio-input',
  template: `
    <div class="form-group radio-group box-rounded p-1 d-flex" >
      <ng-content select="form-label"></ng-content>
      <ng-content select="radio-option"></ng-content>
    </div>
  `,
})
export class RadioGroupComponent implements AfterContentInit {
  @Input() name: string;
  @Input() value: string | boolean;

  @ContentChildren(RadioComponent) radios: QueryList<RadioComponent>

  constructor() {}

  ngAfterContentInit(): void {
    this.radios.forEach( radio => {
      radio.name = this.name
    } )
  }
}
