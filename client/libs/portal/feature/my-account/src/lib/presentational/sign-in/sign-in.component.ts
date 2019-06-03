import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignInDialogComponent } from '../sign-in-dialog/sign-in-dialog.component';
import { CreateAnAccountDialogComponent } from '../create-an-account-dialog/create-an-account-dialog.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'brookfield-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openSignInDialog() {
    const dialogRef = this.dialog.open(SignInDialogComponent);

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if (result === 'forgot_password') {
          this.forgotPasswordDialog();
        }
      });
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateAnAccountDialogComponent, {
      width: '800px'
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

  ngOnInit() {}

  forgotPasswordDialog(): void {
    const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      panelClass: 'forgot-password-dialog'
    });
    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        console.log('The dialog was closed');
      });
  }
}
