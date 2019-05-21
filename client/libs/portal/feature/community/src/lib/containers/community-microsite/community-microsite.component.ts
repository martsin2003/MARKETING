import { map, takeUntil } from 'rxjs/operators';
import { DetectMobileViewService } from '@brookfield/common/utilities';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'brookfield-community-microsite',
  templateUrl: './community-microsite.component.html',
  styleUrls: ['./community-microsite.component.scss']
})
export class CommunityMicrositeComponent implements OnInit, OnDestroy {
  communityImages = [
    'assets/images/desktop/cm-slider-second-image.png',
    'assets/images/desktop/cm-slider-first-image.png'
  ];

  secondSliderCommynityImages = [
    'assets/images/desktop/cm-second-slider-first-img.png',
    'assets/images/desktop/cm-second-slider-second-img.png',
    'assets/images/desktop/cm-second-slider-third-img.png'
  ];

  private fullDesrciptionText = `Innovative design meets relaxed Loudoun County lakefront style — all at a price that ensures
  this opportunity won't last long. Make the morning coffee in your spacious, gourmet kitchen. Sit
  on your front porch and savor each sip. Spend the day kayaking or paddleboarding. Cast a line or
  pack a picnic. This community is full of outdoor fun in the Loudoun countryside. Hike the trails
  amid Virginia's stunning natural beauty. This is home.`;

  private trimmedDescriptionText = `${this.fullDesrciptionText.slice(0, 127).trim()}...`;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  desrciptionText: string;
  readLess: boolean;
  isMobileView$: Observable<boolean>;

  constructor(private detectMobileViewService: DetectMobileViewService) {}

  ngOnInit() {
    this.isMobileView$ = this.detectMobileViewService.isMobileView();
    this.setUpDescriptionChange();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private setUpDescriptionChange() {
    return this.isMobileView$
      .pipe(
        map(viewIsMobile => {
          console.log(1111, viewIsMobile);
          this.desrciptionText = viewIsMobile
            ? this.trimmedDescriptionText
            : this.fullDesrciptionText;
          this.readLess = false;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  readMore() {
    this.readLess = !this.readLess;
    this.desrciptionText = this.readLess ? this.fullDesrciptionText : this.trimmedDescriptionText;
  }
}
