import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@brookfield/material';
import { HomeComponent } from './home/home.component';
import { FindMyHomeComponent } from './find-my-home/find-my-home.component';
import { HomePlansComponent } from './home-plans/home-plans.component';
import { EmpowerInnovationsComponent } from './empower-innovations/empower-innovations.component';
import { WhyBrookfieldComponent } from './why-brookfield/why-brookfield.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CommunityMicrositeComponent } from './community-microsite/community-microsite.component';
import { AreaAmenitiesComponent } from './community-microsite/area-amenities/area-amenities.component';
import { SitePlanComponent } from './community-microsite/site-plan/site-plan.component';
import { HomeownerReviewsComponent } from './community-microsite/homeowner-reviews/homeowner-reviews.component';
import { LocationInfoComponent } from './community-microsite/location-info/location-info.component';
import { CommunityMicrositeModule } from './community-microsite/community-microsite.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindMyHomeComponent,
    HomePlansComponent,
    EmpowerInnovationsComponent,
    WhyBrookfieldComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    CommunityMicrositeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
