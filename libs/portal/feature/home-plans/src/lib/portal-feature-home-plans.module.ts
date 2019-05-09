import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePlansComponent } from './containers/home-plans/home-plans.component';
import { HomePlanListComponent } from './presentational/home-plan-list/home-plan-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomePlansComponent }
    ])
  ],
  declarations: [HomePlansComponent, HomePlanListComponent]
})
export class PortalFeatureHomePlansModule {}
