import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sidebar-dropdown',
  template: `
    <li
      class="nav-item box"
      (click)="toggleEmit()"
    >
      <div class="mask"></div>
      <div class="data d-flex content-space-between">
        {{ label }}
        <i
          class="uil uil-angle-down"
          [@rotate]="!show ? 'default' : 'rotated'"
        ></i>
      </div>
    </li>
    <ul [@collapse]="!show ? 'initial' : 'final'" class="sidebar-dropdown">
      <ng-content select="sidebar-item"></ng-content>
    </ul>
  `,
  animations: [
    trigger('collapse', [
      state(
        'initial',
        style({
          height: '0',
          overflow: 'hidden',
          // opacity: '0',
          visibility: 'hidden',
        })
      ),
      state(
        'final',
        style({
          overflow: 'hidden',
        })
      ),
      transition('initial<=>final', animate('100ms')),
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
export class SidebarDropdownComponent implements OnInit {

  @Input() label: string;

  @Output() toggleEvent = new EventEmitter<string>()

  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleEmit() {
    this.toggleEvent.emit(this.label);
  }
}
