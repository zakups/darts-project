import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; //Neu


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZahleneingabeComponent } from './zahleneingabe/zahleneingabe.component';
import { ZahlbuttonComponent } from './zahlbutton/zahlbutton.component';
import { MatchComponent } from './match/match.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ZahleneingabeComponent,
    ZahlbuttonComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'match', component: ZahleneingabeComponent},
      {path: '', component: FrontpageComponent},
      //{path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
