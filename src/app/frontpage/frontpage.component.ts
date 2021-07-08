import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.sass', './frontpage_menu.sass']
})
export class FrontpageComponent implements OnInit {

  showing_menu = false;

  constructor() { }

  ngOnInit(): void {
    document.getElementById("menu_bullets")!.style.display = "none";
  }

  menu_button_click() : void{
    this.showing_menu = !this.showing_menu;

    if (this.showing_menu) {
      document.getElementById("menu_bullets")!.style.display = "flex";
      document.getElementById("inhalt")!.style.display = "none";
    } else {
      document.getElementById("menu_bullets")!.style.display = "none";
      document.getElementById("inhalt")!.style.display = "block";
    }
   
  }
}
