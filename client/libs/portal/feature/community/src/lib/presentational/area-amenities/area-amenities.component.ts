import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { CommunitiesView } from '../../../../../communities/src/lib/view-model/communities';

@Component({
  selector: 'brookfield-area-amenities',
  templateUrl: './area-amenities.component.html',
  styleUrls: ['./area-amenities.component.scss']
})
export class AreaAmenitiesComponent implements OnInit {
  places = [
    'assets/icons/shopping.svg',
    'assets/icons/dining.svg',
    'assets/icons/recreation.svg',
    'assets/icons/schools.svg',
    'assets/icons/hospitals.svg',
    'assets/icons/transportation.svg'
  ];
  selectedPlace = 0;

  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  constructor() {}

  ngOnInit() {
    this.initGoogleMaps();
  }

  initGoogleMaps() {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

  selectPlace(index: number) {
    this.selectedPlace = index;
  }
}
