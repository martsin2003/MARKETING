import { PortalSharedComponentsModule } from '@brookfield/portal/shared-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommunitiesListComponent } from './containers/communities-list/communities-list.component';
import { CommunitiesHeaderComponent } from './presentational/communities-header/communities-header.component';
import { CommunitiesSelectedComponent } from './presentational/communities-selected/communities-selected.component';
import { CommunitiesCompareComponent } from './containers/communities-compare/communities-compare.component';

@NgModule({
  imports: [
    CommonModule,
    PortalSharedComponentsModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: CommunitiesListComponent }])
  ],
  declarations: [
    CommunitiesListComponent,
    CommunitiesHeaderComponent,
    CommunitiesSelectedComponent,
    CommunitiesCompareComponent
  ]
})
export class PortalFeatureCommunitiesModule {}
