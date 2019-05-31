import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FavoritesDialogComponent } from '../favorites-dialog/favorites-dialog.component';
import { SignInDialogComponent } from '../sign-in-dialog/sign-in-dialog.component';
import { CreateAnAccountDialogComponent } from '../create-an-account-dialog/create-an-account-dialog.component';

@Component({
  selector: 'brookfield-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openSignInDialog() {
    const dialogRef = this.dialog.open(SignInDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(CreateAnAccountDialogComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {}
}
