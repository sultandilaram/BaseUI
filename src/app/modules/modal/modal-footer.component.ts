import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal-footer',
  template: `
    <div class="modal-footer border-t-1 p-1 d-flex justify-content-end ">
      <ng-content></ng-content>
    </div>
  `,
})
export class ModalFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
