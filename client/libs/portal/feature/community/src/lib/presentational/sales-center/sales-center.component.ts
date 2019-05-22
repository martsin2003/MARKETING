import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'brookfield-sales-center',
  templateUrl: './sales-center.component.html',
  styleUrls: ['./sales-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesCenterComponent implements OnInit {
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;

  constructor() {}

  ngOnInit() {
    this.initGoogleMaps();
  }

  private initGoogleMaps() {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }
}
