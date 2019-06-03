import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateAnAccountDialogComponent } from '../create-an-account-dialog/create-an-account-dialog.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'brookfield-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

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
}
