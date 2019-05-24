import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brookfield-my-time-home-tours',
  templateUrl: './my-time-home-tours.component.html',
  styleUrls: ['./my-time-home-tours.component.scss']
})
export class MyTimeHomeToursComponent implements OnInit {
  openedExpansion: boolean;
  isUncomigTours: boolean;

  constructor() {}

  ngOnInit() {}

  openExpansion() {
    this.openedExpansion = true;
  }
}
