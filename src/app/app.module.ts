import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; //Neu


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZahleneingabeComponent } from './zahleneingabe/zahleneingabe.component';
import { ZahlbuttonComponent } from './zahlbutton/zahlbutton.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    ZahleneingabeComponent,
    ZahlbuttonComponent,
    FrontpageComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'match', component: ZahleneingabeComponent},
      {path: 'impressum', component: ImpressumComponent},
      {path: '', component: FrontpageComponent},
      //{path: '**', component: PageNotFoundComponentComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
