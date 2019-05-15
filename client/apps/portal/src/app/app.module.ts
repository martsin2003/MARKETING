import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@brookfield/material';
import { PortalSharedFeatureNavigationModule } from '@brookfield/portal/shared/feature-navigation';
import { PortalSharedFeatureFooterModule } from '@brookfield/portal/shared/feature-footer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    PortalSharedFeatureNavigationModule,
    PortalSharedFeatureFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
