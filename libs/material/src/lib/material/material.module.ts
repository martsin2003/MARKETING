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
  MatDividerModule
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
    MatDividerModule
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
    MatDividerModule
  ]
})
export class MaterialModule {}
