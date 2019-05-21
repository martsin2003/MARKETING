import { PortalSharedComponentsModule } from '@brookfield/portal/shared-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommunityMicrositeComponent } from './containers/community-microsite/community-microsite.component';
import { MaterialModule } from '@brookfield/material';
import { AreaAmenitiesComponent } from './presentational/area-amenities/area-amenities.component';
import { ViewHomesComponent } from './presentational/view-homes/view-homes.component';

@NgModule({
  imports: [
    CommonModule,
    PortalSharedComponentsModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: CommunityMicrositeComponent }])
  ],
  declarations: [CommunityMicrositeComponent, AreaAmenitiesComponent, ViewHomesComponent]
})
export class PortalFeatureCommunityModule {}
