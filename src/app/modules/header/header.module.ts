import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { NavItemComponent } from './nav-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavItemComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NavItemComponent
  ]
})
export class HeaderModule { }
