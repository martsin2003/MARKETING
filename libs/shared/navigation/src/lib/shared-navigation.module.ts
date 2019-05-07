import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MainNavMobileComponent } from './presentational/main-nav-mobile/main-nav-mobile.component';
import { MaterialModule } from '@brookfield/material';
import { SecondaryNavMobileComponent } from './presentational/secondary-nav-mobile/secondary-nav-mobile.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    NavigationComponent,
    MainNavMobileComponent,
    SecondaryNavMobileComponent
  ],
  exports: [NavigationComponent]
})
export class SharedNavigationModule {}
