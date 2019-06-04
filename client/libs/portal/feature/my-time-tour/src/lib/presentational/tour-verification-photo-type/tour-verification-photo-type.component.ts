import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brookfield-tour-verification-photo-type',
  templateUrl: './tour-verification-photo-type.component.html',
  styleUrls: ['./tour-verification-photo-type.component.scss']
})
export class TourVerificationPhotoTypeComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<TourVerificationPhotoTypeComponent>) {}

  ngOnInit() {}

  typeSelected(type: string) {
    this.dialogRef.close(type);
  }
}
