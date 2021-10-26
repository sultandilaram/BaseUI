import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal-body',
  template: `
    <div class="modal-body p-1">
      <ng-content></ng-content>
    </div>
  `,
})
export class ModalBodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
