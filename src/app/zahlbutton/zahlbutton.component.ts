import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zahlbutton',
  templateUrl: './zahlbutton.component.html',
  styleUrls: ['./zahlbutton.component.sass']
})
export class ZahlbuttonComponent implements OnInit {

  @Input() nummer: string;
  

  constructor() { 
    
  }


  ngOnInit(): void {
    if (this.nummer == "a") this.nummer = "←";
    if (this.nummer == "b") this.nummer = "✓";
  }

}
