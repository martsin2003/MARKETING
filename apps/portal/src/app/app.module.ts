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

@NgModule({
  declarations: [AppComponent, HomeComponent, FindMyHomeComponent, HomePlansComponent, EmpowerInnovationsComponent, WhyBrookfieldComponent, MyAccountComponent],
  imports: [BrowserModule, NxModule.forRoot(), BrowserAnimationsModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
