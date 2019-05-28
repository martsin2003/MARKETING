import { Component, OnInit } from '@angular/core';
import { DetailInfo } from '../../models/home-detail-info.interface';

@Component({
  selector: 'brookfield-home-plan-detail',
  templateUrl: './home-plan-detail.component.html',
  styleUrls: ['./home-plan-detail.component.scss']
})
export class HomePlanDetailComponent implements OnInit {
  images = [
    'assets/images/desktop/home-detail-slider-first-img.png',
    'assets/images/desktop/home-detail-slider-second-img.png'
  ];

  homeDetail = {
    title: 'Request More Info About',
    homeName: 'The Torrington II'
  };

  homeDetailInfo: DetailInfo = {
    homeName: 'Torrington II',
    homeDetails: 'Homesite 0105  |  Available 02/10/19',
    communityName: 'The Bluffs at Sleeter Lake',
    startingPrice: 'Strarting Price $554,990',
    location: '18140 Ridgewood Place Round Hill, VA 20141',
    homeType: 'Single-Family Home',
    beds: '4 - 6 Beds',
    baths: '2.5 - 5.5 Baths',
    square: '3,247 = 4,548 sq. ft.',
    description: [
      'Your new home will be stunning, stylish and convenient for daily living with the Torrington II. Featuring a main-level owner’s suite and three more bedrooms on the upper level, this home gives you all the space your family needs for the life you want to live.',
      'There are plenty of opportunities to personalize your space. Choose between a formal living room or a library on the main level. You can also add a conservatory. On the lower level, you can add a recreation room, a den, a media room or game area. And you’ll still have space for plenty of storage.'
    ],
    keyHomeFeatures: [
      'Your Choice of Counters, Cabinets and Flooring',
      'Stainless Steel Appliances',
      'Volume Ceilings in Great Room',
      'Gas Fireplace',
      'Finished Rec Room and Full Bath'
    ]
  };

  constructor() {}

  ngOnInit() {}
}
