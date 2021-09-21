import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; //Neu


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZahleneingabeComponent } from './zahleneingabe/zahleneingabe.component';
import { ZahlbuttonComponent } from './zahlbutton/zahlbutton.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { StartMatchComponent } from './start-match/start-match.component';
import { WerbungComponent } from './werbung/werbung.component';

@NgModule({
  declarations: [
    AppComponent,
    ZahleneingabeComponent,
    ZahlbuttonComponent,
    FrontpageComponent,
    ImpressumComponent,
    StartMatchComponent,
    WerbungComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'match', component: ZahleneingabeComponent},
      {path: 'impressum', component: ImpressumComponent},
      {path: '', component: FrontpageComponent},
      {path: 'l', component: WerbungComponent},
      {path: 'startmatch', component: StartMatchComponent},
      //{path: '**', component: PageNotFoundComponentComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
