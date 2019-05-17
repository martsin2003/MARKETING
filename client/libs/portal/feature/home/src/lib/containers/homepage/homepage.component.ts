import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'brookfield-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  isMobileScreen: boolean;
  carouselImages: string[];
  mobileCarouselImages = [
    '../assets/images/mobile/mobile_header_slider_1_3x.png',
    '../assets/images/mobile/mobile_header_slider_2_3x.png',
    '../assets/images/mobile/mobile_header_slider_3_3x.png'
  ];
  desktopCarouselImages = [
    '../assets/images/desktop/header_slider_1_3x.png',
    '../assets/images/desktop/header_slider_2_3x.png',
    '../assets/images/desktop/header_slider_3_3x.png'
  ];
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(max-width: 959px)']).subscribe(result => {
      this.isMobileScreen = result.matches;
      this.carouselImages = this.isMobileScreen
        ? this.mobileCarouselImages
        : this.desktopCarouselImages;
    });
  }

  ngOnInit() {}
}
