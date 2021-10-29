import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation.component';
import { DocRoutingModule } from './doc-routing.module';
import { SidebarModule } from '../modules/sidebar/sidebar.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ColorsComponent } from './colors/colors.component';
import { TypographyComponent } from './typography/typography.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { AccordionModule } from '../modules/accordion/accordion.module';



@NgModule({
  declarations: [
    DocumentationComponent,
    HomeComponent,
    LayoutComponent,
    ColorsComponent,
    TypographyComponent,
    AccordionComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    DocRoutingModule,
    SidebarModule,
    AccordionModule
  ]
})
export class DocumentationModule { }
