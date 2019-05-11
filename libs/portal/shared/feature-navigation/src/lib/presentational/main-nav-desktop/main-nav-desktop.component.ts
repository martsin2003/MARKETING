import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brookfield-main-nav-desktop',
  templateUrl: './main-nav-desktop.component.html',
  styleUrls: ['./main-nav-desktop.component.scss']
})
export class MainNavDesktopComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  findMyHomeMenu = {
    menuOpen: false
  }

  homePlansMenu = {
    menuOpen: false
  }

  empowerInnovationsMenu = {
    menuOpen: false
  }

  constructor() {}

  ngOnInit() {}

  navigateTo(url: string) {
    this.navigate.emit(url);
  }

  openMenu(menu: string) {
    this[menu].menuOpen = !this[menu].menuOpen;
  }
}
