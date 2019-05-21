import { PortalSharedComponentsModule } from '@brookfield/portal/shared-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommunitiesListComponent } from './containers/communities-list/communities-list.component';
import { CommunitiesHeaderComponent } from './presentational/communities-header/communities-header.component';
import { CommunitiesSelectedComponent } from './presentational/communities-selected/communities-selected.component';
import { CommunitiesCompareComponent } from './containers/communities-compare/communities-compare.component';
import { CommunitiesCompareTableComponent } from './presentational/communities-compare-table/communities-compare-table.component';

@NgModule({
  imports: [
    CommonModule,
    PortalSharedComponentsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CommunitiesListComponent },
      { path: 'compare', pathMatch: 'full', component: CommunitiesCompareComponent }
    ])
  ],
  declarations: [
    CommunitiesListComponent,
    CommunitiesHeaderComponent,
    CommunitiesSelectedComponent,
    CommunitiesCompareComponent,
    CommunitiesCompareTableComponent
  ]
})
export class PortalFeatureCommunitiesModule {}
