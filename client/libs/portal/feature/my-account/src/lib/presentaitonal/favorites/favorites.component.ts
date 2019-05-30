import { Component, OnInit } from '@angular/core';
import { FavoritesDialogComponent } from '../../presentational/favorites-dialog/favorites-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'brookfield-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  openedExpansion: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openExpansion(option: string) {
    this.openedExpansion = option;
    if (option === 'my-favorite-move') {
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FavoritesDialogComponent, {
      width: '80%',
      panelClass: 'favorites-dialog'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
