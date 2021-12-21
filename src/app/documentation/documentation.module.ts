import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentationComponent } from './documentation.component';
import { DocRoutingModule } from './doc-routing.module';
import { SidebarModule } from '../modules/sidebar/sidebar.module';
import { HomeComponent } from './pages/home.component';
import { LayoutComponent } from './pages/layout.component';
import { ColorsComponent } from './pages/colors.component';
import { TypographyComponent } from './pages/typography.component';
import { AccordionComponent } from './pages/components/accordion.component';
import { ButtonsComponent } from './pages/components/buttons.component';
import { AccordionModule } from '../modules/accordion/accordion.module';
import { DropdownsComponent } from './pages/components/dropdowns.component';
import { DropdownModule } from '../modules/dropdown/dropdown.module';
import { CardsComponent } from './pages/components/cards.component';
import { CardsModule } from '../modules/cards/cards.module';
import { ModalModule } from '../modules/modal/modal.module';
import { ModalComponent } from './pages/components/modal.component';
import { InputsComponent } from './pages/forms/inputs.component';
import { FormModule } from '../modules/form/form.module';
import { HeaderModule } from '../modules/header/header.module';



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
    ModalComponent,
    InputsComponent
  ],
  imports: [
    CommonModule,
    DocRoutingModule,
    SidebarModule,
    AccordionModule,
    DropdownModule,
    CardsModule,
    ModalModule,
    FormModule,
    HeaderModule
  ]
})
export class DocumentationModule { }
