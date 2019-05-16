import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmpowerOverviewComponent } from './containers/empower-overview/empower-overview.component';
import { MaterialModule } from '@brookfield/material';
import { InnovationVideosComponent } from './presentational/innovation-videos/innovation-videos.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: EmpowerOverviewComponent
          }
        ]
      },
      { path: '**', redirectTo: '' }
    ])
  ],
  declarations: [EmpowerOverviewComponent, InnovationVideosComponent]
})
export class PortalFeatureEmpowerModule {}
