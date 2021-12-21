import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
    <header class="header {{fixed_class}} box-shadow p-1">
      <nav class="nav container d-flex content-space-between items-center">
        <a routerLink="/" *ngIf="navBrand" class="nav-logo">{{ navBrand }}</a>
        <div class="nav-menu" #navMenu>
          <ul class="nav-list grid">
            <ng-content select="nav-item"></ng-content>
          </ul>
          <i class="uil uil-times nav-close" (click)="toggleMenu(navMenu)"></i>
        </div>
        <div class="d-flex">
          <i class="uil uil-{{theme_icon}} theme-change" *ngIf="themeChange" (click)="changeTheme()"></i>
          <i class="uil uil-apps nav-toggle" (click)="toggleMenu(navMenu)"></i>
        </div>
      </nav>
    </header>
  `,
  styles: [
    `
      @import '../../../assets/scss/vars.scss';
      .header {
        width: 100%;
        z-index: var(--z-fixed);
        background-color: var(--body-color);

        &-fixed {
          position: fixed;
          top: 0;
          bottom: initial;
        }

        .nav {
          height: var(--header-height);
          column-gap: 1rem;

          &-menu {
            margin-left: auto;
          }

          &-logo,
          &-toggle,
          .theme-change {
            color: var(--text-color);
            font-weight: var(--font-medium);
            cursor: pointer;
            &:hover {
              color: var(--text-color-light);
            }
          }
          &-toggle,
          .theme-change {
            font-size: 1.1rem;
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
              z-index: var(--z-fixed);

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
  @Input() fixed: boolean
  @Input() themeChange: boolean

  fixed_class = ""

  theme_icon = "moon"


  constructor() {}

  ngOnInit(): void {
    if(this.fixed){
      this.fixed_class = "header-fixed"
    }
  }

  toggleMenu(menu: HTMLElement) {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
    } else {
      menu.classList.add('show');
    }
  }

  changeTheme(){
    var body = document.getElementsByTagName('body')[0]
    if(body.classList.contains('dark')){
      body.classList.remove('dark')
      this.theme_icon = "moon"
    }else{
      body.classList.add('dark')
      this.theme_icon = "sun"
    }
  }
}
