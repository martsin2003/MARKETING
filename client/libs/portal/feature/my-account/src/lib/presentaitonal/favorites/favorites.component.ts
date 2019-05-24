import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brookfield-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  openedExpansion: string;

  constructor() {}

  ngOnInit() {}

  openExpansion(option: string) {
    this.openedExpansion = option;
  }
}
