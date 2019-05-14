import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'brookfield-home-plans',
  templateUrl: './home-plans.component.html',
  styleUrls: ['./home-plans.component.scss']
})
export class HomePlansComponent implements OnInit, AfterViewInit {

  openDesktopFilter: {open: boolean} = {open: false};

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  openFilter() {
    this.openDesktopFilter = {open: true};
  }

}
