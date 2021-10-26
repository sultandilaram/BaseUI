import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nav-item',
  template: `
    <li>
      <a
        [routerLink]="link"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        [class]="classes"
      >
        <ng-content></ng-content>
      </a>
    </li>
  `,
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  @Input() link: string;
  @Input() disabled: boolean;

  classes = 'nav-link';

  constructor() {}

  ngOnInit(): void {
    if (this.disabled) {
      this.classes = 'nav-link disabled';
    }
  }
}
