import { CommonUiComponentsModule } from '@brookfield/common/ui-components';
import { PortalSharedComponentsModule } from '@brookfield/portal/shared-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CommunityMicrositeComponent } from './containers/community-microsite/community-microsite.component';

@NgModule({
  imports: [
    CommonModule,
    PortalSharedComponentsModule,
    CommonUiComponentsModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: CommunityMicrositeComponent }])
  ],
  declarations: [CommunityMicrositeComponent]
})
export class PortalFeatureCommunityModule {}
