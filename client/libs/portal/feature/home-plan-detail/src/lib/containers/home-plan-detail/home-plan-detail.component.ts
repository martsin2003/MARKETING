import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'brookfield-home-plan-detail',
  templateUrl: './home-plan-detail.component.html',
  styleUrls: ['./home-plan-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePlanDetailComponent implements OnInit {
  images = [
    'assets/images/desktop/home-detail-slider-first-img.png',
    'assets/images/desktop/home-detail-slider-second-img.png'
  ];

  featureKeys = [
    'Your Choice of Counters, Cabinets and Flooring',
    'Stainless Steel Appliances',
    'Volume Ceilings in Great Room',
    'Gas Fireplace',
    'Finished Rec Room and Full Bath'
  ];

  homeDetail = {
    title: 'Request More Info About',
    homeName: 'The Torrington II'
  };

  constructor() {}

  ngOnInit() {}
}
