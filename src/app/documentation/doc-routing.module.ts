import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { ModalComponent } from './components/modal/modal.component';
import { DocumentationComponent } from './documentation.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'layouts', component: LayoutComponent },
      { path: 'colors', component: ColorsComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'components', children: [
        {path: 'accordions', component: AccordionComponent},
        {path: 'buttons', component: ButtonsComponent},
        {path: 'dropdowns', component: DropdownsComponent},
        {path: 'cards', component: CardsComponent},
        {path: 'modal', component: ModalComponent},
      ]}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocRoutingModule {}
