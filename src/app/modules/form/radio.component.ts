import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'radio-option',
  template: `
    <div class="radio-container m-l-1" [formGroup]="formGroup" >
      <input
        [attr.name]="name"
        [formControlName]="name"
        [value]="value"
        [id]="value"
        [attr.checked]="selected"
        type="radio"
      />
      <label [for]="value"><ng-content></ng-content></label>
    </div>
  `,
  styles: [],
})
export class RadioComponent implements OnInit {
  name: string;
  formGroup: FormGroup;
  @Input() value: string | boolean;
  @Input() selected: boolean;

  constructor() {}

  ngOnInit(): void {}
}
