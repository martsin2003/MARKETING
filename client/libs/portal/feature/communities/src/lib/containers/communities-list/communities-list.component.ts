import { Community } from './../../../../../../core-data/data-services/src/lib/communities/communities.model';
import { CommunitiesFacade } from './../../../../../../core-state/src/lib/communities/communities.facade';
import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { CommunitiesView } from '../../view-model/communities';
import { BehaviorSubject } from 'rxjs';
import { take, filter, map } from 'rxjs/operators';

@Component({
  selector: 'brookfield-communities-list',
  templateUrl: './communities-list.component.html',
  styleUrls: ['./communities-list.component.scss']
})
export class CommunitiesListComponent implements OnInit {
  communities$: BehaviorSubject<Community[]> = new BehaviorSubject([]);
  communitiesForCompare = [];
  view: CommunitiesView = CommunitiesView.listMap;
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  constructor(private communitiesFacade: CommunitiesFacade) {}

  ngOnInit() {
    this.loadCommunities();
    this.initGoogleMaps();
  }

  loadCommunities() {
    this.communitiesFacade.loadAll();
    this.communitiesFacade.allCommunities$
      .pipe(
        filter(communities => !!communities && !!communities.length),
        take(1),
        map(ressss => {
          console.log('ressss: ', ressss);
          return ressss;
        })
      )
      .subscribe(this.communities$);
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
