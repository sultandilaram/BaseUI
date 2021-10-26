import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-label',
  template: `
    <label [for]="name"><ng-content></ng-content></label>
  `,
  styles: [
  ]
})
export class FormLabelComponent implements OnInit {

  name:string

  constructor() { }

  ngOnInit(): void {
  }

}
