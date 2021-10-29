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
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { DropdownModule } from '../modules/dropdown/dropdown.module';
import { CardsComponent } from './components/cards/cards.component';
import { CardsModule } from '../modules/cards/cards.module';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    DocumentationComponent,
    HomeComponent,
    LayoutComponent,
    ColorsComponent,
    TypographyComponent,
    AccordionComponent,
    ButtonsComponent,
    DropdownsComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    DocRoutingModule,
    SidebarModule,
    AccordionModule,
    DropdownModule,
    CardsModule,
  ]
})
export class DocumentationModule { }
