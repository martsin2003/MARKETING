import { CarouselComponent } from './presentational/carousel/carousel.component';
import { MaterialModule } from '@brookfield/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityCardComponent } from './containers/community-card/community-card.component';
import { ViewFilterComponent } from './containers/view-filter/view-filter.component';
import { DesktopViewFilterComponent } from './presentational/desktop-view-filter/desktop-view-filter.component';
import { MobileViewFilterComponent } from './presentational/mobile-view-filter/mobile-view-filter.component';
import { EmpoweredSliderComponent } from './presentational/empowered-slider/empowered-slider.component';
import { NavigationComponent } from './containers/navigation/navigation.component';
import { MainNavDesktopComponent } from './presentational/main-nav-desktop/main-nav-desktop.component';
import { MainNavMobileComponent } from './presentational/main-nav-mobile/main-nav-mobile.component';
import { SecondaryNavMobileComponent } from './presentational/secondary-nav-mobile/secondary-nav-mobile.component';
import { SecondaryNavDesktopComponent } from './presentational/secondary-nav-desktop/secondary-nav-desktop.component';
import { FooterComponent } from './containers/footer/footer.component';
import { FooterDesktopComponent } from './presentational/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from './presentational/footer-mobile/footer-mobile.component';
import { HomeCardComponent } from './presentational/home-card/home-card.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    CommunityCardComponent,
    ViewFilterComponent,
    DesktopViewFilterComponent,
    MobileViewFilterComponent,
    EmpoweredSliderComponent,
    NavigationComponent,
    MainNavDesktopComponent,
    MainNavMobileComponent,
    SecondaryNavMobileComponent,
    SecondaryNavDesktopComponent,
    FooterComponent,
    FooterDesktopComponent,
    FooterMobileComponent,
    CarouselComponent,
    HomeCardComponent
  ],
  exports: [
    CommunityCardComponent,
    ViewFilterComponent,
    EmpoweredSliderComponent,
    NavigationComponent,
    FooterComponent,
    CarouselComponent,
    HomeCardComponent
  ]
})
export class PortalSharedComponentsModule {}
