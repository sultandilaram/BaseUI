import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <h1 class="title">Modal</h1>

    <section class="section d-flex flex-dir-column items-center">
      <h1 class="section-title">Demo Modal</h1>
      <button
        class="btn btn-primary"
        style="width: max-content;"
        (click)="myModal.toggle()"
      >
        launch demo modal
      </button>
      <modal #myModal>
        <modal-header> Modal Title </modal-header>
        <modal-body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
          consectetur ipsam ipsum fugiat dolorem fugit nemo atque inventore.
          Possimus modi reiciendis placeat ducimus veritatis animi dignissimos
          tempore voluptates nulla quos!
        </modal-body>
        <modal-footer>
          <button class="btn btn-danger" (click)="myModal.toggle()">
            Close
          </button>
          <button class="btn btn-primary">Save</button>
        </modal-footer>
      </modal>
    </section>
  `,
  styles: [],
})
export class ModalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
