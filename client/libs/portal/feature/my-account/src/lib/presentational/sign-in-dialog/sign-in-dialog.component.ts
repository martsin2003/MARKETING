import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateAnAccountDialogComponent } from '../create-an-account-dialog/create-an-account-dialog.component';

@Component({
  selector: 'brookfield-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss']
})
export class SignInDialogComponent implements OnInit {
  constructor(
    public SignInDialog: MatDialogRef<SignInDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public createDialog: MatDialogRef<CreateAnAccountDialogComponent>
  ) {}

  onNoClick(): void {
    this.SignInDialog.close();
  }

  onNoClick(): void {
    this.createDialog.close();
  }

  ngOnInit() {}
}
