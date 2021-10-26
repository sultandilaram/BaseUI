import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, HostListener, AfterContentInit, ViewEncapsulation } from '@angular/core';
import { ModalHeaderComponent } from './modal-header.component';

@Component({
  selector: 'modal',
  template: `
    <div class="modal-base d-flex justify-content-center align-items-center" [@fade]="modal_state?'final':'initial'">
      <div class="modal-container container box-rounded b-1 bg-light">
        <ng-content select="modal-header"></ng-content>
        <ng-content select="modal-body"></ng-content>
        <ng-content select="modal-footer"></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      @import '../../../assets/scss/vars.scss';

      .modal{
        &-base{
          height: 100vh; width: 100vw;
          background-color: rgba(0,0,0,0.5);
          position: fixed;
          top: 0; left: 0;
          z-index: var(--z-modal);
        }
        &-container{
          position: relative;
          height: max-content;
          min-width: 500px;
        }
        &-close{
          font-size: var(--h2-size);
          cursor: pointer;
          color: var(--text-color-light);
          &:hover{
            color: var(--text-color);
          }
        }
      }
    `
  ],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fade', [
      state(
        'initial',
        style({
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
  ]
})
export class ModalComponent implements AfterContentInit {

  @ContentChild(ModalHeaderComponent) modal_header: ModalHeaderComponent

  modal_state:boolean = false

  constructor() { }

  ngAfterContentInit(): void {
    this.modal_header.toggleEvent.subscribe(
      event => {
        this.toggle()
      }
    )
  }

  toggle(){
    this.modal_state = !this.modal_state
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    var elem = document.getElementsByClassName('modal-base');
    for (var i = 0; i < elem.length; i++) {
      if (elem[i] == event.target) {
        this.modal_state = false;
        break;
      }
    }
  }

}
