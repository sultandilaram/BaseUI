import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';
import { SidebarItemComponent } from './sidebar-item.component';
import { SidebarDropdownComponent } from './sidebar-dropdown.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SidebarItemComponent,
    SidebarDropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    SidebarItemComponent,
    SidebarDropdownComponent
  ]
})
export class SidebarModule { }
