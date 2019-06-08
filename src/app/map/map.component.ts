import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { GeolocationService } from '../services/geolocation.service';
import { Marker } from '../models/marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  startingLat = 40.259309;
  startingLong = -111.671877;
  mapType = 'satellite';
  markers: Marker[] = [];
  zoom = 15;
  selectedMarker: Marker; 
  currentPosition: Marker = new Marker(0, 0, 0.75, "You are here!");

  constructor(private geolocationService: GeolocationService) { }

  ngOnInit() {
    this.markers = [
      new Marker(40.327730, -111.646325, 0.75),
    ];
    this.geolocationService.getPosition().subscribe(
      (pos: Position) => {
          this.currentPosition = new Marker (+(pos.coords.latitude), +(pos.coords.longitude), 1);
      });
  }

  addMarker(lat: number, lng: number) {
    console.log("Adding marker!", lat, lng);
    this.markers.push(new Marker(lat, lng, 0.75, "Cool"));
  }

  // What was this for again? 
  setSelectedMarker(event) {
    console.log("Setting selected marker", event);
    this.selectedMarker = new Marker(event.latitude, event.longitude, 0.75);
  }
}
