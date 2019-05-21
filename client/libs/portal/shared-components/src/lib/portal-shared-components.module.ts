import { MaterialModule } from '@brookfield/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityCardComponent } from './community-card/community-card.component';
import { ViewFilterComponent } from './containers/view-filter/view-filter.component';
import { DesktopViewFilterComponent } from './presentational/desktop-view-filter/desktop-view-filter.component';
import { MobileViewFilterComponent } from './presentational/mobile-view-filter/mobile-view-filter.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    CommunityCardComponent,
    ViewFilterComponent,
    DesktopViewFilterComponent,
    MobileViewFilterComponent
  ],
  exports: [CommunityCardComponent]
})
export class PortalSharedComponentsModule {}
