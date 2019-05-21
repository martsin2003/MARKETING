import { MaterialModule } from '@brookfield/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './presentational/carousel/carousel.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [CarouselComponent],
  exports: [CarouselComponent]
})
export class CommonUiComponentsModule {}
