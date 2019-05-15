import { MaterialModule } from '@brookfield/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFilterComponent } from './containers/view-filter/view-filter.component';
import { DesktopViewFilterComponent } from './presentational/desktop-view-filter/desktop-view-filter.component';
import { MobileViewFilterComponent } from './presentational/mobile-view-filter/mobile-view-filter.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [ViewFilterComponent, DesktopViewFilterComponent, MobileViewFilterComponent],
  exports: [ViewFilterComponent]
})
export class PortalSharedViewFilterModule {}
