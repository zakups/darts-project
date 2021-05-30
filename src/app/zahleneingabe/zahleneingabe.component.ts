import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zahleneingabe',
  templateUrl: './zahleneingabe.component.html',
  styleUrls: ['./zahleneingabe.component.sass']
})


export class ZahleneingabeComponent implements OnInit {

  summe = "0";
  startPunkte = 501;
  maxLegs = 3;
  maxSets = 3;
  textUnten = "2021 World Championship - Round 1";

  s1_name = "Spieler 1";
  s2_name = "Spieler 2";

  s1_punkte = this.startPunkte;
  s2_punkte = this.startPunkte;
  s1_sets = 0;
  s2_sets = 0;
  s1_legs = 0;
  s2_legs = 0;
  s1_hatfinish = false;
  s2_hatfinish = false;
  s1_finishway = "-1";
  s2_finishway = "-1";

  turn_s1 = true;

  //Sound
  soundStatus = false;
  soundStatusCl = true;
  bgaudio = new Audio();
  claudio = new Audio();

  testaudio = new Audio();

  public test = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "0", "b"];
  //public finish = ["T20 T20 Bull", "Kein Finish", "Kein Finish", "T20 T19 Bull", "Kein Finish", "Kein Finish", "T20 T18 Bull", "Kein Finish", "Kein Finish", "T20 T17 Bull", "T20 T20 D20", "Kein Finish", "T20 T20 D19", "T20 T19 D20", "T20 T20 D18", "T20 T19 D19", "T20 T18 D20", "T20 T19 D18", "T20 T20 D16", "T20 T17 D20", "T20 T18 D18", "T20 T19 D16", "T20 T16 D20", "T19 T18 D18", "T20 T18 D16", "T20 T15 D20", "T18 T18 D18", "T20 T17 D16", "T20 T14 D20", "T17 T18 D18", "T20 T20 D10", "T19 T14 D20", "T20 T18 D12", "T19 T20 D10", "T20 T20 D8", "T17 T20 D12", "T20 T14 D16", "T20 T11 D20", "T20 T12 D18", "T20 T17 D10", "T20 S20 Bull", "T19 T12 D18", "T18 T14 D16", "T20 T17 D8", "T19 S19 Bull", "25 T20 D20", "T20 S14 Bull", "T19 T10 D18", "T18 T12 D16", "T20 T7 D20", "T20 S20 D20", "T20 S19 D20", "T20 S18 D20", "T20 S17 D20", "T20 S16 D20", "T20 S15 D20", "T20 S14 D20", "T20 S13 D20", "T20 S20 D16", "T20 S19 D16", "T20 S18 D16", "T20 S17 D16", "T20 S16 D16", "T19 Bull", "T20 S10 D18", "T20 S13 D16", "T18 Bull", "T20 S3 D20", "T20 S10 D16", "T17 Bull", "T20 D20", "T20 S7 D16", "T20 D19", "T19 D20", "T20 D18", "T19 D19", "T18 D20", "T19 D18", "T20 D16", "T17 D20", "T18 D18", "T19 D16", "T16 D20", "T17 D18", "T18 D16", "T15 D20", "T20 D12", "T17 D16", "T14 D20", "T15 D18", "T20 D10", "T13 D20", "T18 D12", "T19 D10", "T20 D8", "T17 D12", "T18 D10", "T19 D8", "T12 D18", "T17 D10", "T10 D20", "T13 D15", "T20 D4", "T17 D8", "T10 D18", "25 D20", "T16 D8", "T13 D12", "T10 D16", "25 D18", "S20 D20", "S19 D20", "S18 D20", "S17 D20", "S16 D20", "S15 D20", "S14 D20", "S13 D20", "S20 D16", "S19 D16", "S18 D16", "S17 D16", "S16 D16", "S15 D16", "S6D 20", "S13 D16", "S12 D16", "S11 D16", "S10 D16", "S9 D16", "D20", "S7 D16", "D19", "S5 D16", "D18", "S3 D16", "D17", "S17 D8", "D16", "S15 D8", "D15", "S13 D8", "D14", "S11 D8", "D13", "S9 D8", "D12", "S7 D8", "D11", "S5 D8", "D10", "S3 D8", "D9", "S1 D8", "D8", "S7 D4", "D7", "S5 D4", "D6", "S3 D4", "D5", "S1 D4", "D4", "S3 D2", "D3", "S1 D2", "D2", "S1 D2", "D1"];
  public finish = ["T20 T20 Bull", "-1", "-1", "T20 T19 Bull", "-1", "-1", "T20 T18 Bull", "-1", "-1", "T20 T17 Bull", "T20 T20 D20", "-1", "T20 T20 D19", "T20 T19 D20", "T20 T20 D18", "T20 T19 D19", "T20 T18 D20", "T20 T19 D18", "T20 T20 D16", "T20 T17 D20", "T20 T18 D18", "T20 T19 D16", "T20 T16 D20", "T19 T18 D18", "T20 T18 D16", "T20 T15 D20", "T18 T18 D18", "T20 T17 D16", "T20 T14 D20", "T17 T18 D18", "T20 T20 D10", "T19 T14 D20", "T20 T18 D12", "T19 T20 D10", "T20 T20 D8", "T17 T20 D12", "T20 T14 D16", "T20 T11 D20", "T20 T12 D18", "T20 T17 D10", "T20 20 Bull", "T19 T12 D18", "T18 T14 D16", "T20 T17 D8", "T19 19 Bull", "25 T20 D20", "T20 14 Bull", "T19 T10 D18", "T18 T12 D16", "T20 T7 D20", "T20 20 D20", "T20 19 D20", "T20 18 D20", "T20 17 D20", "T20 16 D20", "T20 15 D20", "T20 14 D20", "T20 13 D20", "T20 20 D16", "T20 19 D16", "T20 18 D16", "T20 17 D16", "T20 16 D16", "T19 Bull", "T20 10 D18", "T20 13 D16", "T18 Bull", "T20 3 D20", "T20 10 D16", "T17 Bull", "T20 D20", "T20 7 D16", "T20 D19", "T19 D20", "T20 D18", "T19 D19", "T18 D20", "T19 D18", "T20 D16", "T17 D20", "T18 D18", "T19 D16", "T16 D20", "T17 D18", "T18 D16", "T15 D20", "T20 D12", "T17 D16", "T14 D20", "T15 D18", "T20 D10", "T13 D20", "T18 D12", "T19 D10", "T20 D8", "T17 D12", "T18 D10", "T19 D8", "T12 D18", "T17 D10", "T10 D20", "T13 D15", "T20 D4", "T17 D8", "T10 D18", "25 D20", "T16 D8", "T13 D12", "T10 D16", "25 D18", "20 D20", "19 D20", "18 D20", "17 D20", "16 D20", "15 D20", "14 D20", "13 D20", "20 D16", "19 D16", "18 D16", "17 D16", "16 D16", "15 D16", "6D 20", "13 D16", "12 D16", "11 D16", "10 D16", "9 D16", "D20", "7 D16", "D19", "5 D16", "D18", "3 D16", "D17", "17 D8", "D16", "15 D8", "D15", "13 D8", "D14", "11 D8", "D13", "9 D8", "D12", "7 D8", "D11", "5 D8", "D10", "3 D8", "D9", "1 D8", "D8", "7 D4", "D7", "5 D4", "D6", "3 D4", "D5", "1 D4", "D4", "3 D2", "D3", "1 D2", "D2", "1 D2", "D1"];

  contructor() { 
    
  }

  ngOnInit(): void {
    //this.bgaudio.src = "../../../assets/bg1.mp3";
    //this.bgaudio.src ="https://gitlab.com/nilstrautner/darts/-/raw/master/src/assets/bg1.mp3";
    //this.bgaudio.load();
  }


  changeSoundStatus(status : boolean) : void {
    this.soundStatus = status;
    
    //Backgroudn Sound abspielen
    if (this.soundStatus) {
      

      this.bgaudio.src = "../assets/bg1.mp3"
      this.bgaudio.play();
      this.claudio.play();
      console.log("Sound gespielt");
    } else {
      this.bgaudio.pause();
    }
  }

  playSound(i : number) : void {
    console.log("Play sound");
    if (this.soundStatusCl) {
      if (i == 180) {
        //this.claudio.src = "../../../assets/180.mp3";
        
        this.claudio.src = "../assets/180.mp3";
        //this.claudio.load();
        this.claudio.play();
      }
      if (i == 140) {
        //this.claudio.src = "../../../assets/140.wav";
        this.claudio.src = "../assets/140.wav";
        //this.claudio.load();
        this.claudio.play();
        
      }
      if (i == 100) {
        //this.claudio.src = "../../../assets/100.wav";
        this.claudio.src = "../assets/100.wav";
        //this.claudio.load();
        this.claudio.play();
      }
    }
  }

  getFinishWay(index : any) : string {
    let xx: number = +index;
    if (xx >= 2 && xx <= 170) {
      return this.finish[170-xx];
    }
    return "-1";
  }

  setSpielerName(nr: any) : void {
    switch (nr) {
      case 1: 
        let temp = prompt("Gebe einen gewünschen Namen für Spieler 1 ein:", this.s1_name);
        if (temp != null && temp != "") this.s1_name = temp;
        break;
      case 2: 
        let temp1 = prompt("Gebe einen gewünschen Namen für Spieler 1 ein:", this.s2_name);
        if (temp1 != null && temp1 != "") this.s2_name = temp1;
        break;
      case 3:
        let temp3 = prompt("Gebe einen gewünschen Titel für das Event an:", this.textUnten);
        if (temp3 != null && temp3 != "") this.textUnten = temp3;
        break;
    }
  }

  checkForStatus() : void {
    //Check Alter Status unten
    if (this.textUnten.charAt(this.textUnten.length-1) == "!") this.textUnten = "2021 World Championship - Round 1";

    //Finish Ways
    this.s1_finishway = this.getFinishWay(this.s1_punkte);
    if(this.s1_finishway != "-1") {
      this.s1_hatfinish = true;
    } else {
      this.s1_hatfinish = false;
    }

    this.s2_finishway = this.getFinishWay(this.s2_punkte);
    if(this.s2_finishway != "-1") {
      this.s2_hatfinish = true;
    } else {
      this.s2_hatfinish = false;
    }

    //Check for win
    if (this.s1_punkte == 0) {
      this.s1_legs++;
      this.s1_punkte = this.startPunkte;
      this.s2_punkte = this.startPunkte;
      if (this.s1_legs >= this.maxLegs) {
        this.s1_sets++;
        this.s1_legs = 0;
        this.s2_legs = 0;
      }
      this.s1_hatfinish = false;
      this.s2_hatfinish = false;
    }
    if (this.s2_punkte == 0) {
      this.s2_legs++;
      this.s2_punkte = this.startPunkte;
      this.s1_punkte = this.startPunkte;
      if (this.s2_legs >= this.maxLegs) {
        this.s2_sets++;
        this.s2_legs = 0;
        this.s1_legs = 0;
      }
      this.s1_hatfinish = false;
      this.s2_hatfinish = false;
    }

    //Check Winner End
    if (this.s1_sets == this.maxSets) {
      this.s1_legs = 0;
      this.s2_legs = 0;
      this.s1_punkte = this.startPunkte;
      this.s2_punkte = this.startPunkte;
      this.s1_sets = 0;
      this.s2_sets = 0;
      this.textUnten = this.s1_name + " hat gewonnen!";
      this.s1_hatfinish = false;
      this.s2_hatfinish = false;
    }
    if (this.s2_sets == this.maxSets) {
      this.s1_legs = 0;
      this.s2_legs = 0;
      this.s1_punkte = this.startPunkte;
      this.s2_punkte = this.startPunkte;
      this.s1_sets = 0;
      this.s2_sets = 0;
      this.textUnten = this.s2_name + " hat gewonnen!";
      this.s1_hatfinish = false;
      this.s2_hatfinish = false;
    }
  }


  falscheEingabe() : void {
    console.log("Falsche Eingabe");
  }
  
  klicken(nr : string) : void {

    //Submit
    if (nr == "b") {
      this.submit(this.summe);
      return;
    }
    //Zurück
    if(nr == "a") {
      //Letzte Ziffer löschen
      this.summe = this.summe.substring(0, this.summe.length-1);
      if (this.summe == "") this.summe = "0";
      return;
    }

    if (this.summe == "0") this.summe = nr; //Bei 0 vorne
    else this.summe = this.summe + nr;
  }



  submit(sum : string) : void {
    let xx: number = +sum;
   if (xx >= 0 && xx <= 180) {
      //Korrekt
      this.summe = "0";
      if (this.turn_s1 ) {
        if (this.s1_punkte - xx < 0 || this.s1_punkte - xx == 1) {
          this.falscheEingabe();
          return;
        }
        this.s1_punkte -= xx;
      } else { 
        if (this.s2_punkte - xx < 0 || this.s2_punkte - xx == 1) {
          this.falscheEingabe();
          return;
        }
        this.s2_punkte -=xx; 
      }
      this.playSound(xx);
      this.checkForStatus();
      this.turn_s1 = !this.turn_s1;
   } else {
    this.falscheEingabe();
   }
  }

  
  testklick() : void {
    this.testaudio.src = "../assets/bg1.mp3"
    this.testaudio.load();
    this.testaudio.play();
}

  
}
