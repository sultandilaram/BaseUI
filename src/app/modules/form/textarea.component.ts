import { Component, ContentChild, Input, AfterContentInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormLabelComponent } from './form-label.component';

@Component({
  selector: 'form-textarea',
  template: `
  <div class="form-group box-rounded p-1" [formGroup]="formGroup">
      <ng-content select="form-label"></ng-content>
      <textarea
      class="form-input"
      [formControlName]="name"
      [id]="name"
      [rows]="rows"
      [cols]="cols"
      tabindex="1"
      [innerText]="value"
    ></textarea>
    </div>
  `,
  styles: [
  ]
})
export class TextareaComponent implements AfterContentInit {

  @Input() name: string
  @Input() value: string
  @Input() rows: number | string
  @Input() cols: number | string

  @ContentChild(FormLabelComponent) label: FormLabelComponent

  formGroup: FormGroup

  constructor() { }

  ngAfterContentInit(): void {
    this.label.name = this.name
  }

}
