import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { GeolocationService } from '../services/geolocation.service';

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
    { lat: 40.327730, long: -111.646325, alpha: 1 },
  ];
  zoom = 13;
  selectedMarker; 
  currentPostion = {
    lat: 0, long: 0
  }; 

  constructor(private geolocationService: GeolocationService) { }

  ngOnInit() {
    this.geolocationService.getPosition().subscribe(
      (pos: Position) => {
          this.currentPostion = {
            lat:  +(pos.coords.latitude),
            long: +(pos.coords.longitude)
          };
      });
  }

  addMarker(lat: number, long: number) {
    console.log("Adding marker!", lat, long);
    this.markers.push({ lat, long, alpha: 0.4 });
  }

  setSelectedMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      long: event.longitude,
      alpha: 0.4
    };
  }
}
