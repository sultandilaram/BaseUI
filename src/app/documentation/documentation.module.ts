import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation.component';
import { DocRoutingModule } from './doc-routing.module';
import { SidebarModule } from '../modules/sidebar/sidebar.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    DocumentationComponent,
    HomeComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DocRoutingModule,
    SidebarModule
  ]
})
export class DocumentationModule { }
