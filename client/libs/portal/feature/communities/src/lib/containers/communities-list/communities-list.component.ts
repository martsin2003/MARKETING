import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {} from 'googlemaps';
import { CommunitiesView } from '../../view-model/communities';
import { ReplaySubject, Observable, Subject } from 'rxjs';
import { take, filter, map, takeUntil } from 'rxjs/operators';
import { Community } from '@brookfield/portal/core-data/data-services';
import { CommunitiesFacade } from '@brookfield/portal/core-state';
import { DetectMobileViewService } from '@brookfield/common/utilities';

@Component({
  selector: 'brookfield-communities-list',
  templateUrl: './communities-list.component.html',
  styleUrls: ['./communities-list.component.scss']
})
export class CommunitiesListComponent implements OnInit, OnDestroy {
  communities$: ReplaySubject<Community[]> = new ReplaySubject(1);
  communitiesForCompare = [];
  view: CommunitiesView = CommunitiesView.listMap;
  filter: { open: boolean };
  isMobileView$: Observable<boolean>;
  switchedViewType: boolean;
  showPanelCompare: boolean;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild('map') mapElement: any;
  map: google.maps.Map;
  constructor(
    private communitiesFacade: CommunitiesFacade,
    private detectMobileViewService: DetectMobileViewService
  ) {}

  ngOnInit() {
    this.isMobileView$ = this.detectMobileViewService.isMobileView();
    this.setUpDescriptionChange();
    this.loadCommunities();
    this.initGoogleMaps();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private setUpDescriptionChange() {
    return this.isMobileView$
      .pipe(
        map(viewIsMobile => {
          if (viewIsMobile) {
            if (!this.switchedViewType || this.view === 'listMap') {
              this.viewChanged(CommunitiesView.list);
            }
          }
        }, takeUntil(this.destroy$))
      )
      .subscribe();
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
    this.switchedViewType = true;
  }

  communitySelected(id: string) {
    const index = this.communitiesForCompare.indexOf(id);
    if (index !== -1) {
      this.communitiesForCompare.pop();
    } else {
      this.communitiesForCompare.push(id);
    }
    if (this.communitiesForCompare.length) {
      this.showPanelCompare = true;
    } else {
      this.showPanelCompare = false;
    }
  }
}
