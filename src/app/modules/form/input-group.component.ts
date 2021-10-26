import { Component, ContentChild, Input, AfterContentInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormLabelComponent } from './form-label.component';

@Component({
  selector: 'form-input',
  template: `
    <div class="form-group box-rounded p-1" [formGroup]="formGroup">
      <ng-content select="form-label"></ng-content>
      <input
        [id]="name"
        [formControlName]="name"
        [type]="type"
        [checked]="value"
        [readonly]="readonly"
        [min]="min"
        [max]="max"
        class="form-input"
        tabindex="1"
      />
    </div>
  `,
})
export class InputGroupComponent implements AfterContentInit {
  @Input() name: string;
  @Input() type: string;
  @Input() value: string | boolean | number;
  @Input() readonly: boolean;
  @Input() min: number;
  @Input() max: number;

  @ContentChild(FormLabelComponent) label: FormLabelComponent

  formGroup: FormGroup

  constructor() {}

  ngAfterContentInit(): void {
    this.label.name = this.name
  }
}
