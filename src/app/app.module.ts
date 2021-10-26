import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './test/test.component';
import { AccordionModule } from './modules/accordion/accordion.module';
import { HeaderModule } from './modules/header/header.module';
import { AlertsModule } from './modules/alerts/alerts.module';
import { CardsModule } from './modules/cards/cards.module';
import { DropdownModule } from './modules/dropdown/dropdown.module';
import { ModalModule } from './modules/modal/modal.module';
import { FormModule } from './modules/form/form.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    AccordionModule,
    AlertsModule,
    CardsModule,
    DropdownModule,
    ModalModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
