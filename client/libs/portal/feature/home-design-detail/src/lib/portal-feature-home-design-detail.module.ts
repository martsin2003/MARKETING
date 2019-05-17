import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeDesignDetailComponent } from './containers/home-design-detail/home-design-detail.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([{ path: '', pathMatch: 'full', component: HomeDesignDetailComponent }])
  ],
  declarations: [HomeDesignDetailComponent]
})
export class PortalFeatureHomeDesignDetailModule {}
