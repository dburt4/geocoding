import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  startingLat = 40.327730;
  startingLong = -111.646325;
  mapType = 'satellite';
  markers = [
    { lat: 40.327730, long: -111.646325, alpha: 0.4 },
  ];
  zoom = 13;

  constructor() { }

  ngOnInit() {
  }

  addMarker(lat: number, long: number) {
    this.markers.push({ lat, long, alpha: 0.4 });
  }
}
