import { PortalSharedComponentsModule } from '@brookfield/portal/shared-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePlanDetailComponent } from './containers/home-plan-detail/home-plan-detail.component';
import { MaterialModule } from '@brookfield/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PortalSharedComponentsModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: HomePlanDetailComponent }])
  ],
  declarations: [HomePlanDetailComponent]
})
export class PortalFeatureHomePlanDetailModule {}
