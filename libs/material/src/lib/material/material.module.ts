import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatListModule,
  MatDividerModule,
  MatRadioModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatRadioModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    MatRadioModule
  ]
})
export class MaterialModule {}
