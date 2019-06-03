import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'brookfield-create-an-account-dialog',
  templateUrl: './create-an-account-dialog.component.html',
  styleUrls: ['./create-an-account-dialog.component.scss']
})
export class CreateAnAccountDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateAnAccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
