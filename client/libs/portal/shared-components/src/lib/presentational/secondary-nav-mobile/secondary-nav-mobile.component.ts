import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'brookfield-secondary-nav-mobile',
  templateUrl: './secondary-nav-mobile.component.html',
  styleUrls: ['./secondary-nav-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondaryNavMobileComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  navigateTo(url: string) {
    this.navigate.emit(url);
  }
}
