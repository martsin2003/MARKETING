import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommunitiesListComponent } from './containers/communities-list/communities-list.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: '', pathMatch: 'full', component: CommunitiesListComponent }])
  ],
  declarations: [CommunitiesListComponent]
})
export class PortalFeatureCommunitiesModule {}
