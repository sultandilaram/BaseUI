import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { InputGroupComponent } from './input-group.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioGroupComponent } from './radio-group.component';
import { RadioComponent } from './radio.component';
import { FormLabelComponent } from './form-label.component';
import { TextareaComponent } from './textarea.component';
import { SelectComponent } from './select.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    FormComponent,
    InputGroupComponent,
    RadioGroupComponent,
    RadioComponent,
    FormLabelComponent,
    TextareaComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    FormComponent,
    InputGroupComponent,
    RadioGroupComponent,
    RadioComponent,
    FormLabelComponent,
    TextareaComponent,
    SelectComponent,
  ]
})
export class FormModule { }
