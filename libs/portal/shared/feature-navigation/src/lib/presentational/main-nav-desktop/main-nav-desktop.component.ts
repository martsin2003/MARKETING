import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brookfield-main-nav-desktop',
  templateUrl: './main-nav-desktop.component.html',
  styleUrls: ['./main-nav-desktop.component.scss']
})
export class MainNavDesktopComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  menuIsOpened: boolean;
  openedMenu: string | null;

  constructor() {}

  ngOnInit() {}

  navigateTo(url: string) {
    this.navigate.emit(url);
  }

  openMenu(menu: string) {
    if (!this.menuIsOpened) {
      this.menuIsOpened = true;
    }
    this.openedMenu = menu;
  }

  closeMenu() {
    this.menuIsOpened = false;
    this.openedMenu = null;
  }
}
