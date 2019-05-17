import { DetectMobileViewService } from '@brookfield/common/utilities';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'brookfield-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  isMobileScreen$: Observable<boolean>;
  carouselImages$: Observable<string[]>;
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
  constructor(private detectMobileViewService: DetectMobileViewService) {}

  ngOnInit() {
    this.isMobileScreen$ = this.detectMobileViewService.isMobileView();
    this.carouselImages$ = this.setImagesBasedOnViewChage();
  }

  private setImagesBasedOnViewChage() {
    return this.isMobileScreen$.pipe(
      withLatestFrom(viewIsMobile => {
        return viewIsMobile ? this.mobileCarouselImages : this.desktopCarouselImages;
      })
    );
  }
}
