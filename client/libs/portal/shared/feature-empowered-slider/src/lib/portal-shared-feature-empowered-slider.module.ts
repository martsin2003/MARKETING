import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetEmpoweredComponent } from './containers/get-empowered/get-empowered.component';
import { CommonUiComponentsImageCarouselModule } from '@brookfield/common/ui-components/image-carousel';

@NgModule({
  imports: [CommonModule, CommonUiComponentsImageCarouselModule],
  declarations: [GetEmpoweredComponent],
  exports: [GetEmpoweredComponent]
})
export class PortalSharedFeatureEmpoweredSliderModule { }
