import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './pages/colors.component';
import { AccordionComponent } from './pages/components/accordion.component';
import { ButtonsComponent } from './pages/components/buttons.component';
import { CardsComponent } from './pages/components/cards.component';
import { DropdownsComponent } from './pages/components/dropdowns.component';
import { ModalComponent } from './pages/components/modal.component';
import { DocumentationComponent } from './documentation.component';
import { InputsComponent } from './pages/forms/inputs.component';
import { HomeComponent } from './pages/home.component';
import { LayoutComponent } from './pages/layout.component';
import { TypographyComponent } from './pages/typography.component';

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
      ]},
      { path: 'forms', children: [
        {path: 'inputs', component: InputsComponent},
      ]},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocRoutingModule {}
