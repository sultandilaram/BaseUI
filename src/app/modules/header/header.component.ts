import { Component, Input, OnInit } from '@angular/core';

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
  styleUrls: ['./header.component.scss'],
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
