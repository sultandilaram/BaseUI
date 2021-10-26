import { Component, EventEmitter, AfterContentInit, Output, ViewEncapsulation, ContentChildren, QueryList, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputGroupComponent } from './input-group.component';
import { RadioGroupComponent } from './radio-group.component';
import { SelectComponent } from './select.component';
import { TextareaComponent } from './textarea.component';

@Component({
  selector: 'app-form',
  template: `
    <form [formGroup]="formGroup" class="form d-grid" (ngSubmit)="formSumit()">
      <ng-content></ng-content>
      <button class="btn btn-primary" type="submit">{{submitText}}</button>
    </form>
  `,
  styles: [
    `
      @import '../../../assets/scss/vars.scss';

      .form {
        width: 500px;
        height: max-content;
        &-group {
          background-color: var(--input-color);
          height: max-content;
        }
        &-label{
          font-size: var(--font-small);
          color: var(--title-color);
        }
        &-input{
          width: 100%;
          background-color: var(--input-color);
          color: var(--text-color);
          font-family: var(--font-family);
          font-size: var(--font-size);
          border: none; outline: none;
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements AfterContentInit {

  @Input() submitText: string
  @Output() submit: EventEmitter<String>
  @ContentChildren(InputGroupComponent) inputGroups: QueryList<InputGroupComponent>
  @ContentChildren(RadioGroupComponent) radioGroups: QueryList<RadioGroupComponent>
  @ContentChildren(TextareaComponent) textareas: QueryList<TextareaComponent>
  @ContentChildren(SelectComponent) selects: QueryList<SelectComponent>

  formGroup: FormGroup = new FormGroup({})

  constructor(
  ) {}

  ngAfterContentInit(): void {
    this.inputGroups.forEach( group => {
      this.formGroup.addControl(group.name, new FormControl(group.value))
      group.formGroup = this.formGroup
    } )
    this.radioGroups.forEach( group => {
      this.formGroup.addControl(group.name, new FormControl(group.value))
      group.radios.forEach(radio => {
        radio.formGroup = this.formGroup
      })
    } )
    this.textareas.forEach( group => {
      this.formGroup.addControl(group.name, new FormControl(group.value))
      group.formGroup = this.formGroup
    } )
    this.selects.forEach( group => {
      this.formGroup.addControl(group.name, new FormControl(group.value))
      group.formGroup = this.formGroup
    } )
  }

  formSumit(){
    console.log(this.formGroup.value)
  }
}
