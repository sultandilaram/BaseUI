import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { CardBodyComponent } from './card-body.component';
import { CardFooterComponent } from './card-footer.component';
import { CardHeaderComponent } from './card-header.component';



@NgModule({
  declarations: [
    CardsComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardsComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardHeaderComponent
  ]
})
export class CardsModule { }
