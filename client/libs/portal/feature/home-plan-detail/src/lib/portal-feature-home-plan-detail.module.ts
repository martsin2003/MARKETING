import { PortalSharedComponentsModule } from '@brookfield/portal/shared-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePlanDetailComponent } from './containers/home-plan-detail/home-plan-detail.component';
import { MaterialModule } from '@brookfield/material';
import { InteractiveFloorPlanComponent } from './containers/interactive-floor-plan/interactive-floor-plan.component';
import { ElevationSelectComponent } from './presentational/elevation-select/elevation-select.component';
import { FloorPlanComponent } from './presentational/floor-plan/floor-plan.component';
import { KeyHomeFeatureComponent } from './presentational/key-home-feature/key-home-feature.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PortalSharedComponentsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomePlanDetailComponent },
      { path: 'interactive-floorplan', pathMatch: 'full', component: InteractiveFloorPlanComponent }
    ])
  ],
  declarations: [
    HomePlanDetailComponent,
    InteractiveFloorPlanComponent,
    ElevationSelectComponent,
    FloorPlanComponent,
    KeyHomeFeatureComponent
  ]
})
export class PortalFeatureHomePlanDetailModule {}
