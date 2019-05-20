import { MaterialModule } from '@brookfield/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityCardComponent } from './community-card/community-card.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [CommunityCardComponent],
  exports: [CommunityCardComponent]
})
export class PortalSharedComponentsModule {}
