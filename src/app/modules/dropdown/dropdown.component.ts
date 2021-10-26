import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dropdown',
  template: `
    <div class="dropdown-container">
      <button class="dropdown-btn btn btn-{{color}}" (click)="toggle()">
        {{ value }}
        <i class="uil uil-angle-down"></i>
      </button>
      <ul
        class="dropdown-items box-shadow box-rounded bg-light b-1"
        [@collapse]="dropdown_state ? 'final' : 'initial'"
      >
        <ng-content></ng-content>
      </ul>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      @import '../../../assets/scss/vars.scss';
      .dropdown {
        &-items {
          position: absolute;
          width: max-content;
          overflow: hidden;

          li {
            padding: 1rem;
            background-color: var(--light-color);
            cursor: pointer;
            &:hover {
              background-color: var(--light-color-hover);
            }
          }
        }
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
      transition('initial<=>final', animate('100ms')),
    ]),
  ],
})
export class DropdownComponent implements OnInit {
  @Input() value: string;
  @Input() color: string;

  dropdown_state = false;

  constructor() {}

  ngOnInit(): void {
    if(!this.color){
      this.color = 'light'
    }
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    var elem = document.getElementsByClassName('dropdown-btn');
    var close = true;
    for (var i = 0; i < elem.length; i++) {
      if (elem[i].contains(event.target as Node)) {
        close = false;
        break;
      }
    }

    if (close && this.dropdown_state) {
      this.dropdown_state = false;
    }
  }

  toggle() {
    this.dropdown_state = !this.dropdown_state;
  }
}
