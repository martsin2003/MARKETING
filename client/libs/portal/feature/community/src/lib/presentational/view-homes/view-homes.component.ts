import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brookfield-view-homes',
  templateUrl: './view-homes.component.html',
  styleUrls: ['./view-homes.component.scss']
})
export class ViewHomesComponent implements OnInit {
  selectedOption = 'home-plans';
  filter = { open: false };

  constructor() {}

  ngOnInit() {}

  selectViewOption(option: string) {
    this.selectedOption = option;
  }

  openFilter() {
    this.filter = { open: true };
  }
}
