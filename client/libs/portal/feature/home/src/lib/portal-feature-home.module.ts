import { MaterialModule } from '@brookfield/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './containers/homepage/homepage.component';
import { SearchHomesComponent } from './presentational/search-homes/search-homes.component';
import { RouterModule, Route } from '@angular/router';
import { CommonUiComponentsModule } from '@brookfield/common/ui-components';

export const portalFeatureHomeRoutes: Route[] = [
  { path: '', component: HomepageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule, CommonUiComponentsModule],
  declarations: [HomepageComponent, SearchHomesComponent]
})
export class PortalFeatureHomeModule {}
