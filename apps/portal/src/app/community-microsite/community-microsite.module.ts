import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitePlanComponent } from './site-plan/site-plan.component';
import { LocationInfoComponent } from './location-info/location-info.component';
import { HomeownerReviewsComponent } from './homeowner-reviews/homeowner-reviews.component';
import { AreaAmenitiesComponent } from './area-amenities/area-amenities.component';
import { CommunityMicrositeComponent } from './community-microsite.component';

@NgModule({
  declarations: [
    CommunityMicrositeComponent,
    SitePlanComponent,
    LocationInfoComponent,
    HomeownerReviewsComponent,
    AreaAmenitiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SitePlanComponent,
    LocationInfoComponent,
    HomeownerReviewsComponent,
    AreaAmenitiesComponent
  ]
})
export class CommunityMicrositeModule { }
