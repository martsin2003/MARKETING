import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@brookfield/material';
import { AppRoutingModule } from '../app-routing.module';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { SecondaryNavigationComponent } from './secondary-navigation/secondary-navigation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [MainNavigationComponent, SecondaryNavigationComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    MainNavigationComponent,
    SecondaryNavigationComponent,
    FooterComponent
  ]
})
export class SharedModule { }
