import { PortalSharedComponentsModule } from '@brookfield/portal/shared-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FindMyHomeComponent } from './containers/find-my-home/find-my-home.component';
import { MaterialModule } from '@brookfield/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PortalSharedComponentsModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: FindMyHomeComponent }])
  ],
  declarations: [FindMyHomeComponent]
})
export class PortalFeatureFindMyHomeModule {}
