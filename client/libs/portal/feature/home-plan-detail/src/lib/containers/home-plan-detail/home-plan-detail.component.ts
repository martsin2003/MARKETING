import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brookfield-home-plan-detail',
  templateUrl: './home-plan-detail.component.html',
  styleUrls: ['./home-plan-detail.component.scss']
})
export class HomePlanDetailComponent implements OnInit {
  images = [
    'https://images.pexels.com/photos/237018/pexels-photo-237018.jpeg?cs=srgb&dl=asphalt-beauty-colorful-237018.jpg&fm=jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTsCjUXQ8TFyfM3l4IOf6su-orwP7YGicEMn8ba4rRGAMFUBv',
    'https://images.pexels.com/photos/730218/pexels-photo-730218.jpeg?cs=srgb&dl=asfalt-barvy-cesta-730218.jpg&fm=jpg'
  ];

  constructor() {}

  ngOnInit() {}
}
