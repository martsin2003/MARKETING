import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { MaterialModule } from '@brookfield/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent]
})
export class CommonUiComponentsImageCarouselModule {}
