import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <h1 class="title">Buttons</h1>

    <section class="section">
      <h1 class="section-title">Buttons</h1>
      <div class="d-flex flex-wrap content-center">
        <button class="btn btn-primary">.btn-primary</button>
        <button class="btn btn-secondary">.btn-secondary</button>
        <button class="btn btn-success">.btn-success</button>
        <button class="btn btn-danger">.btn-danger</button>
        <button class="btn btn-warning">.btn-warning</button>
        <button class="btn btn-info">.btn-info</button>
        <button class="btn btn-light">.btn-light</button>
        <button class="btn btn-dark">.btn-dark</button>
      </div>
    </section>

    <section class="section">
      <h1 class="section-title">Button Group</h1>
      <div class="d-flex content-center">
        <div class="btn-group">
          <button class="btn btn-primary">Left</button>
          <button class="btn btn-primary">Middle</button>
          <button class="btn btn-primary">Right</button>
        </div>
      </div>
    </section>

    <section class="section">
      <h1 class="section-title">Button Block</h1>
      <div class="d-flex flex-wrap content-center container">
        <button class="btn btn-block btn-primary">.btn-block</button>
      </div>
    </section>
  `,
  styles: [],
})
export class ButtonsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
