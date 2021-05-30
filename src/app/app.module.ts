import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZahleneingabeComponent } from './zahleneingabe/zahleneingabe.component';
import { ZahlbuttonComponent } from './zahlbutton/zahlbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    ZahleneingabeComponent,
    ZahlbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
