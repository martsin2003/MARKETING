import { PortalSharedViewFilterModule } from './../../../../shared/view-filter/src/lib/portal-shared-view-filter.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePlansComponent } from './containers/home-plans/home-plans.component';
import { HomePlanListComponent } from './presentational/home-plan-list/home-plan-list.component';
import { MaterialModule } from '@brookfield/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomePlansComponent }
    ]),
    PortalSharedViewFilterModule
  ],
  declarations: [HomePlansComponent, HomePlanListComponent]
})
export class PortalFeatureHomePlansModule {}
