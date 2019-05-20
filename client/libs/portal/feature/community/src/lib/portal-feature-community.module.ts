import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommunityMicrositeComponent } from './containers/community-microsite/community-microsite.component';
import { CommonUiComponentsImageCarouselModule } from '@brookfield/common/ui-components/image-carousel';
import { PortalSharedFeatureEmpoweredSliderModule } from '@brookfield/portal/shared/feature-empowered-slider';

@NgModule({
  imports: [
    CommonModule,
    PortalSharedFeatureEmpoweredSliderModule,
    CommonUiComponentsImageCarouselModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: CommunityMicrositeComponent }])
  ],
  declarations: [CommunityMicrositeComponent]
})
export class PortalFeatureCommunityModule { }
