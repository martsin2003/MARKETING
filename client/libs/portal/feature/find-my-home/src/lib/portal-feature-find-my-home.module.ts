import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FindMyHomeComponent } from './containers/find-my-home/find-my-home.component';
import { MaterialModule } from '@brookfield/material';
import { CommunityCardComponent } from './presentational/community-card/community-card.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: FindMyHomeComponent }])
  ],
  declarations: [FindMyHomeComponent, CommunityCardComponent]
})
export class PortalFeatureFindMyHomeModule {}
