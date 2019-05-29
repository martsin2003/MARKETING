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
  imageTitles = [
    {
      content: `
        <div class="image-content">
          <p class="image-content__content-title">The Home You Want.</p>
          <p class="image-content__content-title">Easier Than You Imagined.</p>
          <p class="image-content__subtitle">Make the Connection</p>
        </div>
      `
    },
    {
      content: `
        <div class="image-content">
          <p class="image-content__content-title">The Right Home.</p>
          <p class="image-content__content-title">The Perfect Place.</p>
          <p class="image-content__subtitle">Enjoy Home Shopping Made Easy</p>
        </div>
      `
    },
    {
      content: `
        <div class="image-content">
          <p class="image-content__content-title">More Freedom.</p>
          <p class="image-content__content-title">More Control.</p>
          <p class="image-content__subtitle">Discover Empower Innovation Features</p>
        </div>
      `
    }
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
