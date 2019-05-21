import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { CommunitiesView } from '../../view-model/communities';
import { ReplaySubject } from 'rxjs';
import { take, filter, map } from 'rxjs/operators';
import { Community } from '@brookfield/portal/core-data/data-services';
import { CommunitiesFacade } from '@brookfield/portal/core-state';

@Component({
  selector: 'brookfield-communities-list',
  templateUrl: './communities-list.component.html',
  styleUrls: ['./communities-list.component.scss']
})
export class CommunitiesListComponent implements OnInit {
  communities$: ReplaySubject<Community[]> = new ReplaySubject(1);
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
        take(1)
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
    const index = this.communitiesForCompare.indexOf(id);
    if (index !== -1) {
      this.communitiesForCompare.pop();
    } else {
      this.communitiesForCompare.push(id);
    }
  }
}
