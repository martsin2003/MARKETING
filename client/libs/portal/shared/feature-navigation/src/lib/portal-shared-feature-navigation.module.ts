import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { MainNavMobileComponent } from './presentational/main-nav-mobile/main-nav-mobile.component';
import { SecondaryNavMobileComponent } from './presentational/secondary-nav-mobile/secondary-nav-mobile.component';
import { MaterialModule } from '@brookfield/material';
import { SecondaryNavDesktopComponent } from './presentational/secondary-nav-desktop/secondary-nav-desktop.component';
import { MainNavDesktopComponent } from './presentational/main-nav-desktop/main-nav-desktop.component';
import { AppRoutingModule } from 'apps/portal/src/app/app-routing.module';

@NgModule({
  imports: [CommonModule, MaterialModule, AppRoutingModule],
  declarations: [
    NavigationComponent,
    MainNavMobileComponent,
    SecondaryNavMobileComponent,
    SecondaryNavDesktopComponent,
    MainNavDesktopComponent
  ],
  exports: [NavigationComponent]
})
export class PortalSharedFeatureNavigationModule {}
