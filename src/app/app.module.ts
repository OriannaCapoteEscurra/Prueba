
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { ImgCentralComponent } from './img-central/img-central.component';
import { SecondSeccionComponent } from './second-seccion/second-seccion.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { ClientsComponent } from './clients/clients.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    ImgCentralComponent,
    SecondSeccionComponent,
    FooterComponent,
    FormComponent,
    ClientsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
