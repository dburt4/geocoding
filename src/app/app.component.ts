import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'geocoding';

  constructor() { }

  ngOnInit() {
    console.log('Hello world!');
  }
}
