import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { MaterialModule } from '@brookfield/material';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [MainNavigationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    MainNavigationComponent
  ]
})
export class SharedModule { }
