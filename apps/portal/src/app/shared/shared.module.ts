import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryNavigationComponent } from './secondary-navigation/secondary-navigation.component';
import { MaterialModule } from '@brookfield/material';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [SecondaryNavigationComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    SecondaryNavigationComponent,
    FooterComponent
  ]
})
export class SharedModule { }
