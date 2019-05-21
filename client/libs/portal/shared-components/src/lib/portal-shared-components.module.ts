import { CommonUiComponentsImageCarouselModule } from '@brookfield/common/ui-components/image-carousel';
import { MaterialModule } from '@brookfield/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityCardComponent } from './containers/community-card/community-card.component';
import { ViewFilterComponent } from './containers/view-filter/view-filter.component';
import { DesktopViewFilterComponent } from './presentational/desktop-view-filter/desktop-view-filter.component';
import { MobileViewFilterComponent } from './presentational/mobile-view-filter/mobile-view-filter.component';
import { EmpoweredSliderComponent } from './presentational/empowered-slider/empowered-slider.component';

@NgModule({
  imports: [CommonModule, MaterialModule, CommonUiComponentsImageCarouselModule],
  declarations: [
    CommunityCardComponent,
    ViewFilterComponent,
    DesktopViewFilterComponent,
    MobileViewFilterComponent,
    EmpoweredSliderComponent
  ],
  exports: [CommunityCardComponent, ViewFilterComponent, EmpoweredSliderComponent]
})
export class PortalSharedComponentsModule {}
