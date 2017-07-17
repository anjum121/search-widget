import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  config: any;

  constructor() {

    this.config = {
      placeholderText: 'SEARCH (Client Name / Policy Number)' ,
      debouceTiming: '200' // 500 is default
    };
  }
}
