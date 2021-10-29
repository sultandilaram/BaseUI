import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'accordion-item',
  template: `
    <div
      class="accordion-header p-1 b-b-1 d-flex items-center"
      (click)="toggleEmit()"
    >
      <div class="accordion-title">{{ title }}</div>
      <i
        class="uil uil-angle-down"
        [@rotate]="!show ? 'default' : 'rotated'"
      ></i>
    </div>
    <div [@collapse]="!show ? 'initial' : 'final'">
      <div class="accordion-body p-1 b-b-1 d-flex">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      @import '../../../assets/scss/vars.scss';
    `,
    `
      .accordion-header {
        min-height: 2rem;
        cursor: pointer;

        .accordion-title {
          overflow-wrap: break-word;
          overflow: auto;
          width: 100%;
          font-weight: var(--font-semi-bold);
        }
      }

      .accordion-body {
        min-height: 2rem;
      }
    `,
  ],
  animations: [
    trigger('collapse', [
      state(
        'initial',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          visibility: 'hidden',
        })
      ),
      state(
        'final',
        style({
          overflow: 'hidden',
        })
      ),
      transition('initial<=>final', animate('200ms')),
    ]),
    trigger('rotate', [
      state(
        'default',
        style({
          transform: 'rotate(0)',
        })
      ),
      state(
        'rotated',
        style({
          transform: 'rotate(180deg)',
        })
      ),
      transition('default<=>rotated', animate('200ms')),
    ]),
  ],
})
export class AccordionItemComponent implements OnInit {
  @Input() title: string;
  @Output() toggleEvent = new EventEmitter<string>();
  show = false;

  constructor() {}

  ngOnInit(): void {}

  toggleEmit() {
    this.toggleEvent.emit(this.title);
  }
}
