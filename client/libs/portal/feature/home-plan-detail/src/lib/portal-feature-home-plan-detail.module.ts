import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePlanDetailComponent } from './containers/home-plan-detail/home-plan-detail.component';
import { MaterialModule } from '@brookfield/material';
import { CommonUiComponentsImageCarouselModule } from '@brookfield/common/ui-components/image-carousel';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomePlanDetailComponent }
    ]),
    CommonUiComponentsImageCarouselModule
  ],
  declarations: [HomePlanDetailComponent]
})
export class PortalFeatureHomePlanDetailModule {}
