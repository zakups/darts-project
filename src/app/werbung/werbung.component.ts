import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-werbung',
  templateUrl: './werbung.component.html',
  styleUrls: ['./werbung.component.sass']
})
export class WerbungComponent implements OnInit {

  id: string;
  constructor(private router: ActivatedRoute, private realrouter: Router) { }

  ngOnInit(): void {
    //get id
    this.router.queryParams.pipe(filter((params: Params) => params["id"]))
      .subscribe((params: Params) => {
        this.id = params.id;
      }
    );
      console.log(this.id);
    //check range
    if (this.id == "0" || this.id == null || !this.doesFileExist("../../assets/werbung/id/" + this.id + ".png")) {
      this.realrouter.navigate(['/']);
    }
  }

  doesFileExist(urlToFile : string) : boolean {
    let xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    if (xhr.status == 404) {
        return false;
    } else {
        return true;
    }
  }

}
