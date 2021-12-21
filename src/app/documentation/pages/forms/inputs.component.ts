import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  template: `
    <h1 class="title">Form Inputs</h1>

    <section class="section">
      <div class="d-flex content-center">
        <app-form submitText="Submit">
          <form-input name="text" type="text">
            <form-label>Text Input</form-label>
          </form-input>
          <form-input name="password" type="password">
            <form-label>Password Input</form-label>
          </form-input>
          <form-input name="email" type="email">
            <form-label>Email Input</form-label>
          </form-input>
          <form-input name="number" type="number" [value]="0">
            <form-label>NumberInput</form-label>
          </form-input>
          <radio-input name="radio">
            <form-label>Radio Input</form-label>
            <radio-option value="option1"> Option 1 </radio-option>
            <radio-option value="option2" [selected]="true">
              Option 2
            </radio-option>
            <radio-option value="option3"> Option 3 </radio-option>
          </radio-input>
          <form-textarea name="textarea">
            <form-label>Textarea</form-label>
          </form-textarea>
          <form-select [multiple]="true" [clearable]="true">
            <form-label>Select</form-label>
          </form-select>
        </app-form>
      </div>
    </section>
  `,
  styles: [],
})
export class InputsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
