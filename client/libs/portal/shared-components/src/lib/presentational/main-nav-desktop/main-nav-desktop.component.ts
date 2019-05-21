import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'brookfield-main-nav-desktop',
  templateUrl: './main-nav-desktop.component.html',
  styleUrls: ['./main-nav-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavDesktopComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  @Output() menuInOpenedState = new EventEmitter<boolean>();
  @Input() absoluteNav: boolean;

  menuIsOpened: boolean;
  openedMenu: string | null;

  constructor() {}

  ngOnInit() {}

  navigateTo(url: string) {
    this.menuIsOpened = false;
    this.navigate.emit(url);
  }

  openMenu(menu: string) {
    this.menuInOpenedState.emit(true);
    if (!this.menuIsOpened) {
      this.menuIsOpened = true;
    }
    this.openedMenu = menu;
  }

  closeMenu() {
    this.menuInOpenedState.emit(false);
    this.menuIsOpened = false;
    this.openedMenu = null;
  }
}
