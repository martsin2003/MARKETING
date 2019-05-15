import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brookfield-secondary-nav-desktop',
  templateUrl: './secondary-nav-desktop.component.html',
  styleUrls: ['./secondary-nav-desktop.component.scss']
})
export class SecondaryNavDesktopComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  navigateTo(url: string) {
    this.navigate.emit(url);
  }
}
