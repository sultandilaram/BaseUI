import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sidebar',
  template: `
    <div class="sidebar box-shadow">
      <div class="siderbar-brand p-1 text-center">
        <h1>{{ title }}</h1>
      </div>
      <div class="sidebar-nav">
        <ul>
          <ng-content></ng-content>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      @import '../../../assets/scss/vars.scss';

      .sidebar {
        background-color: var(--body-color);
        min-width: 300px;
        height: 100vh;

        .nav {
          &-item {
            width: 100%;
            cursor: pointer;
            position: relative;

            .mask{
              position: absolute;
              left: -100%; top: 0;
              height: 100%; width: 100%;
              background-color: var(--primary-color);
              z-index: 1;
              transition: all 150ms;
            }
            .data{
              position: relative;
              z-index: 2;
            }

            &:hover,
            &.active {
              color: white;
              .mask{
                left: 0;
              }
            }
          }
        }
        &-dropdown{
          background-color: var(--body-color-light);
          box-shadow: var(--box-shadow-inset-light);
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,

})
export class SidebarComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
