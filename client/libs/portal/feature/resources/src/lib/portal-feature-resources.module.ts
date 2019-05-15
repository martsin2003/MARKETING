import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerCareComponent } from './containers/customer-care/customer-care.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        children: [
          { path: '', redirectTo: 'customer-care', pathMatch: 'full' },
          {
            path: 'customer-care',
            pathMatch: 'full',
            component: CustomerCareComponent
          }
        ]
      },
      { path: '**', redirectTo: 'customer-care' }
    ])
  ],
  declarations: [CustomerCareComponent]
})
export class PortalFeatureResourcesModule {}
