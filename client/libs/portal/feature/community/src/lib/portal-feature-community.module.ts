import { PortalSharedComponentsModule } from '@brookfield/portal/shared-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommunityMicrositeComponent } from './containers/community-microsite/community-microsite.component';
import { MaterialModule } from '@brookfield/material';
import { AreaAmenitiesComponent } from './presentational/area-amenities/area-amenities.component';
import { ViewHomesComponent } from './presentational/view-homes/view-homes.component';
import { SitePlanComponent } from './presentational/site-plan/site-plan.component';
import { ResidentReviewsComponent } from './presentational/resident-reviews/resident-reviews.component';
import { SalesCenterComponent } from './presentational/sales-center/sales-center.component';
import { CommunityHeaderComponent } from './presentational/community-header/community-header.component';

@NgModule({
  imports: [
    CommonModule,
    PortalSharedComponentsModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: CommunityMicrositeComponent }])
  ],
  declarations: [
    CommunityMicrositeComponent,
    AreaAmenitiesComponent,
    ViewHomesComponent,
    SitePlanComponent,
    ResidentReviewsComponent,
    SalesCenterComponent,
    CommunityHeaderComponent
  ]
})
export class PortalFeatureCommunityModule {}
