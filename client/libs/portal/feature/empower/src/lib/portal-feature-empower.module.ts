import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmpowerOverviewComponent } from './containers/empower-overview/empower-overview.component';
import { MaterialModule } from '@brookfield/material';
import { InnovationVideosComponent } from './presentational/innovation-videos/innovation-videos.component';
import { MyTimeTourComponent } from './containers/my-time-tour/my-time-tour.component';
import { MyTimeTourDesktopComponent } from './presentational/my-time-tour-desktop/my-time-tour-desktop.component';

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
          },
          {
            path: 'my-time-tour',
            component: MyTimeTourComponent
          }
        ]
      },
      { path: '**', redirectTo: '' }
    ])
  ],
  declarations: [
    EmpowerOverviewComponent,
    InnovationVideosComponent,
    MyTimeTourComponent,
    MyTimeTourDesktopComponent
  ]
})
export class PortalFeatureEmpowerModule {}
