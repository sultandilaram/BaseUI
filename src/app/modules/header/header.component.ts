import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header box-shadow">
      <nav class="nav container">
        <a routerLink="/" *ngIf="navBrand" class="nav-logo">{{ navBrand }}</a>
        <div class="nav-menu" #navMenu>
          <ul class="nav-list grid">
            <ng-content select="nav-item"></ng-content>
          </ul>
          <i class="uil uil-times nav-close" (click)="toggleMenu(navMenu)"></i>
        </div>
        <div class="nav-toggle" (click)="toggleMenu(navMenu)">
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  `,
  styles: [
    `
      @import '../../../assets/scss/vars.scss';
      .header {
        width: 100%;
        padding: 1rem;
        z-index: var(--z-fixed);
        background-color: var(--body-color);
        position: fixed;
        top: 0;
        bottom: initial;

        .nav {
          height: var(--header-height);
          column-gap: 1rem;
          display: flex;
          justify-content: space-between;
          items: center;

          &-menu {
            margin-left: auto;
          }

          &-logo,
          &-toggle {
            color: var(--title-color);
            font-weight: var(--font-medium);
            cursor: pointer;
            &:hover {
              color: var(--primary-color);
            }
          }
          &-toggle {
            font-size: 1.1rem;
            cursor: pointer;
          }
          &-list {
            display: flex;
            column-gap: 2rem;
          }
          &-close {
            font-size: 1.5rem;
            position: absolute;
            right: 1.3rem;
            bottom: 0.5rem;
            cursor: pointer;

            &:hover {
              color: var(--primary-color);
            }
          }

          &-toggle,
          &-close {
            display: none;
          }
          &-link {
            font-size: var(--font-small);
            color: var(--title-color);
            font-weight: var(--font-medium);

            &:hover,
            &.active {
              color: var(--primary-color);
            }
            &.disabled {
              color: var(--text-color-disabled);
            }
          }
        }
      }

      @media screen and (max-width: 768px) {
        .header {
          padding: 0.5rem;

          .nav {
            height: var(--header-height);
            column-gap: initial;

            &-toggle,
            &-close {
              display: block;
            }
            &-close {
              position: absolute;
              top: 1rem;
              right: 1rem;
              height: max-content;
            }
            &-list {
              flex-direction: column;
              gap: 0.5rem;
            }
            &-menu {
              margin-left: initial;
              position: fixed;
              top: 0;
              right: -100%;
              height: 100%;
              min-width: 75%;
              background-color: var(--body-color);
              padding: 2rem 1.5rem 4rem;
              box-shadow: var(--box-shadow);
              transition: 0.3s;

              &.show {
                right: 0;
              }
            }
            &-link {
              font-size: var(--h3-size);
            }
          }
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  @Input() navBrand: string;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(menu: HTMLElement) {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    } else {
      menu.classList.add('show');
    }
  }
}
