import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Marker } from 'src/app/models/marker';

@Component({
  selector: 'app-info-sheet',
  templateUrl: './info-sheet.component.html',
  styleUrls: ['./info-sheet.component.css']
})
export class InfoSheetComponent implements OnInit {

  marker: Marker;
  showHint = false;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) marker: Marker) { 
    this.marker = marker;
  }

  ngOnInit() {
  }

}
