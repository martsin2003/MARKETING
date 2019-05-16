import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brookfield-secondary-nav-mobile',
  templateUrl: './secondary-nav-mobile.component.html',
  styleUrls: ['./secondary-nav-mobile.component.scss']
})
export class SecondaryNavMobileComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  navigateTo(url: string) {
    console.log('clicked', url);
    this.navigate.emit(url);
  }
}
