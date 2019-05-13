import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@brookfield/material';
import { FindMyHomeComponent } from './find-my-home/find-my-home.component';
import { EmpowerInnovationsComponent } from './empower-innovations/empower-innovations.component';
import { WhyBrookfieldComponent } from './why-brookfield/why-brookfield.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CommunityMicrositeComponent } from './community-microsite/community-microsite.component';
import { AreaAmenitiesComponent } from './community-microsite/area-amenities/area-amenities.component';
import { SitePlanComponent } from './community-microsite/site-plan/site-plan.component';
import { HomeownerReviewsComponent } from './community-microsite/homeowner-reviews/homeowner-reviews.component';
import { LocationInfoComponent } from './community-microsite/location-info/location-info.component';
import { CommunityMicrositeModule } from './community-microsite/community-microsite.module';
import { CommunityCardComponent } from './find-my-home/community-card/community-card.component';
import { PortalSharedFeatureNavigationModule } from '@brookfield/portal/shared/feature-navigation';
import { PortalSharedFeatureFooterModule } from '@brookfield/portal/shared/feature-footer';

@NgModule({
  declarations: [
    AppComponent,
    FindMyHomeComponent,
    EmpowerInnovationsComponent,
    WhyBrookfieldComponent,
    MyAccountComponent,
    CommunityCardComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    CommunityMicrositeModule,
    PortalSharedFeatureNavigationModule,
    PortalSharedFeatureFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
