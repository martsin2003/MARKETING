import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePlanDetailComponent } from './containers/home-plan-detail/home-plan-detail.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomePlanDetailComponent }
    ])
  ],
  declarations: [HomePlanDetailComponent]
})
export class PortalFeatureHomePlanDetailModule {}
