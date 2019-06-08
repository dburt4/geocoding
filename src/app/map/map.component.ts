import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { GeolocationService } from '../services/geolocation.service';
import { Marker } from '../models/marker';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { InfoSheetComponent } from '../components/info-sheet/info-sheet.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  startingLat = 40.259309;
  startingLong = -111.671877;
  mapType = 'roadmap';
  markers: Marker[] = [];
  zoom = 15;
  selectedMarker: Marker; 
  currentPosition: Marker = new Marker(0, 0, 0.75, "You are here!");

  constructor(private geolocationService: GeolocationService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.markers = [
      new Marker(40.327730, -111.646325, 0.75),
    ];
    this.geolocationService.getPosition().subscribe(
      (pos: Position) => {
          console.log("Getting new position!");
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
    let found = false;
    for (let i = 0; i < this.markers.length; i++) {
      if (event.latitude == this.markers[i].lat && event.longitude == this.markers[i].lng) {
        this.selectedMarker = this.markers[i];
        found = true;
        break;
      }
    }
    
    if (!found) {
      console.log("UNABLE TO update currently selected marker", event);
      return;
    }

    this.openInfoSheet();
  }

  openInfoSheet() {
    this._bottomSheet.open(InfoSheetComponent, { data: this.selectedMarker });
  }
}
