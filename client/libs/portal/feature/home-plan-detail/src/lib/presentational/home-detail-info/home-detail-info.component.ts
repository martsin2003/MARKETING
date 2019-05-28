import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { DetailInfo } from '../../models/home-detail-info.interface';
import { DetectMobileViewService } from '@brookfield/common/utilities';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'brookfield-home-detail-info',
  templateUrl: './home-detail-info.component.html',
  styleUrls: ['./home-detail-info.component.scss']
})
export class HomeDetailInfoComponent implements OnInit, OnDestroy, OnChanges {
  @Input() featureKeys: string[];
  @Input() detailInfo: DetailInfo;

  isMobileView$: Observable<boolean>;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  fullDesrciptionText = [];
  desrciptionText: string[];
  readLess: boolean;
  private trimmedDescriptionText: string;

  constructor(private detectMobileViewService: DetectMobileViewService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.detailInfo && changes.detailInfo.currentValue) {
      this.fullDesrciptionText = this.detailInfo.description;
      this.trimmedDescriptionText = `${this.fullDesrciptionText
        .join(' ')
        .slice(0, 127)
        .trim()}...`;
      this.isMobileView$ = this.detectMobileViewService.isMobileView();
      this.setUpDescriptionChange();
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private setUpDescriptionChange() {
    return this.isMobileView$
      .pipe(
        map(viewIsMobile => {
          this.desrciptionText = viewIsMobile
            ? [this.trimmedDescriptionText]
            : this.fullDesrciptionText;
          this.readLess = false;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  readMore() {
    this.readLess = !this.readLess;
    this.desrciptionText = this.readLess ? this.fullDesrciptionText : [this.trimmedDescriptionText];
  }
}
