import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-match',
  templateUrl: './start-match.component.html',
  styleUrls: ['./start-match.component.sass']
})
export class StartMatchComponent implements OnInit {

  @Output() someEvent = new EventEmitter<[number, string, string, string, number, number, number]>();

  background = "#003F63";
  header = "#005687";
  gelb = "#F2B705";
  gelb_hover = "#f5da89";

  spielerAnzahl = 2;
  showError = false;

  constructor() { }

  ngOnInit(): void {
    this.changePlayerAmount(2);
  }

  startGame(playerAmount : string, name1 : string, name2 : string, bezeichnung : string, spielmodus : string, sets : string, legs : string) : void {
    console.log(playerAmount, name1, name2, bezeichnung, spielmodus, sets, legs)
    if (name1 == "" || name2 == "" || bezeichnung == "" || Number(spielmodus) <= 0 || Number(sets) <= 0 || Number(legs) <= 0) {
      this.showError = true;
      return;
    }
    this.someEvent.next([Number(playerAmount), name1, name2, bezeichnung, Number(spielmodus), Number(sets), Number(legs)]);
  }



  changePlayerAmount(i : number) : void {
    this.spielerAnzahl = i;
    if (this.spielerAnzahl == 1) {
      document.getElementById("rechts")!.style.backgroundColor = this.background;
      document.getElementById("rechts")!.style.color = this.gelb;
      document.getElementById("links")!.style.backgroundColor = this.gelb;
      document.getElementById("links")!.style.color = this.background;
      document.getElementById("sp2_input")!.style.display= "none";

      
    } else {
      document.getElementById("links")!.style.backgroundColor = this.background;
      document.getElementById("links")!.style.color = this.gelb;
      document.getElementById("rechts")!.style.backgroundColor = this.gelb;
      document.getElementById("rechts")!.style.color = this.background;
      document.getElementById("sp2_input")!.style.display= "flex";
 
    }
  }

}
