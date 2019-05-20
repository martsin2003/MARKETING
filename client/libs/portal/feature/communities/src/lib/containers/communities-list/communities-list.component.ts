import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { CommunitiesView } from '../../view-model/communities';

@Component({
  selector: 'brookfield-communities-list',
  templateUrl: './communities-list.component.html',
  styleUrls: ['./communities-list.component.scss']
})
export class CommunitiesListComponent implements OnInit {
  communities = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  communitiesForCompare = [];
  view: CommunitiesView = CommunitiesView.listMap;
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

  viewChanged(view: CommunitiesView) {
    this.view = view;
  }

  communitySelected(id: string) {
    console.log('id:---- ', id);
    const index = this.communitiesForCompare.indexOf(id);
    if (index !== -1) {
      this.communitiesForCompare.pop();
    } else {
      this.communitiesForCompare.push(id);
    }
  }
}
