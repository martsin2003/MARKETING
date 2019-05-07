import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brookfield-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  menuOpened: boolean;

  constructor() {}

  ngOnInit() {}

  toggleMenuOpen() {
    this.menuOpened = !this.menuOpened;
  }
}
