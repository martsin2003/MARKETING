import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'brookfield-main-nav-mobile',
  templateUrl: './main-nav-mobile.component.html',
  styleUrls: ['./main-nav-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavMobileComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  navigateTo(url: string) {
    this.navigate.emit(url);
  }
}
