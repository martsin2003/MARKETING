import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryNavigationComponent } from './secondary-navigation/secondary-navigation.component';
import { MaterialModule } from '@brookfield/material';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [SecondaryNavigationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    SecondaryNavigationComponent
  ]
})
export class SharedModule { }
