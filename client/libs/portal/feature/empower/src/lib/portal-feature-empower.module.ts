import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmpowerOverviewComponent } from './containers/empower-overview/empower-overview.component';

@NgModule({
  imports: [
    CommonModule,

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
  declarations: [EmpowerOverviewComponent]
})
export class PortalFeatureEmpowerModule {}
