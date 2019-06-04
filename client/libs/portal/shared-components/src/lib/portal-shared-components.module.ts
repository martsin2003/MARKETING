import { RouterModule } from '@angular/router';
import { CarouselComponent } from './presentational/carousel/carousel.component';
import { MaterialModule } from '@brookfield/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MoreInfoFormComponent } from './containers/more-info-form/more-info-form.component';
import { BottomSheetComponent } from './presentational/bottom-sheet/bottom-sheet.component';
import { CardInfoComponent } from './containers/card-info/card-info.component';
import { CommunityCardComponent } from './presentational/community-card/community-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule, ReactiveFormsModule],
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
    HomeCardComponent,
    MoreInfoFormComponent,
    BottomSheetComponent,
    CardInfoComponent,
    CommunityCardComponent
  ],
  exports: [
    CommunityCardComponent,
    ViewFilterComponent,
    EmpoweredSliderComponent,
    NavigationComponent,
    FooterComponent,
    CarouselComponent,
    HomeCardComponent,
    MoreInfoFormComponent,
    BottomSheetComponent,
    CardInfoComponent
  ],
  entryComponents: [BottomSheetComponent]
})
export class PortalSharedComponentsModule {}
