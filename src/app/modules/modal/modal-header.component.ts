import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-header',
  template: `
    <div class="modal-header p-1 b-b-1 d-flex content-space-between">
      <h3 class="heading"> <ng-content></ng-content> </h3>
      <i class="uil uil-times modal-close" (click)="closeModal()"></i>
    </div>
  `,
})
export class ModalHeaderComponent implements OnInit {

  @Output() toggleEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.toggleEvent.emit()
  }

}
