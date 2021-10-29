import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-item',
  template: `
    <li
      [routerLink]="link"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }"
      class="nav-item box box-rounded"
    >
      <div class="mask"></div>
      <div class="data"><ng-content></ng-content></div>
    </li>
  `,
})
export class SidebarItemComponent implements OnInit {
  @Input() link: string;

  constructor() {}

  ngOnInit(): void {}
}
