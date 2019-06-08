import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { GeolocationService } from '../services/geolocation.service';
import { Marker } from '../models/marker';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { InfoSheetComponent } from '../components/info-sheet/info-sheet.component';
import { DateAdapter } from '@angular/material';

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

    const date1 = new Date();
    date1.setMonth(2);

    const peak = new Marker(40.300283, -111.624762, 1, null, "Squaw Peak Overlook Treasure", 
    "This geocache is a combo of all you've seen. The sparkle and piercing looks always impress with this tiny package. You'll find it along the overlook trail in a bush that is in a 3 way cross of trails.", 
    "Under some rocks in the bush at the 'roundabout'", "small", date1, "6/1/2019", 35);
    const date2 = new Date();
    date2.setMonth(2);
    date2.setDate(20);
    const timp = new Marker(40.324189,-111.648088, 1, null, "Stary Mt. Timpanogos Park", "This geocache will have you stary eyed. It's located at Mt. Timpanogos park", "Ground level rock crevasse", "small",
    date2, "4/15/2019", 75);
    const date3 = new Date();
    date3.setMonth(5);
    date3.setDate(6);
    const southFork = new Marker(40.347515, -111.549509, 1, null, "South Fork Park - Finders Keepers", "FIRST ONE TO FIND THIS ONE GETS TO KEEP IT!!! This is a flying treasure found across the bridge and within ear shot of the river under a log", 
    "Past the swing", "medium", date3, "-never-", 60);

    this.markers.push(peak);
    this.markers.push(timp);
    this.markers.push(southFork);

    // this.markers = [
    //   peak, park1, southFork
    //   // new Marker(40.327730, -111.646325, 0.75),
    // ];
    this.geolocationService.getPosition().subscribe(
      (pos: Position) => {
          console.log("Getting new position!", pos);
          this.currentPosition = new Marker (+(pos.coords.latitude), +(pos.coords.longitude), 1);
    });
  }

  addMarker(lat: number, lng: number) {
    console.log("Adding marker!", lat, lng);
    // this.markers.push(new Marker(lat, lng, 0.75, "Cool"));
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
