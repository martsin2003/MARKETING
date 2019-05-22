import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, combineLatest, Subject } from 'rxjs';
import { throttleTime, debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'brookfield-community-header',
  templateUrl: './community-header.component.html',
  styleUrls: ['./community-header.component.scss']
})
export class CommunityHeaderComponent implements OnInit, OnDestroy {
  showCommunityHeader: boolean;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  ngOnInit() {
    const lastScrollEvent = fromEvent(document, 'scroll').pipe(
      debounceTime(400),
      takeUntil(this.destroy$)
    );

    const throttledScrollEvents = fromEvent(document, 'scroll').pipe(
      throttleTime(400),
      takeUntil(this.destroy$)
    );

    combineLatest(lastScrollEvent, throttledScrollEvents).subscribe(values => {
      if (window.pageYOffset > 142) {
        this.showCommunityHeader = true;
      } else {
        this.showCommunityHeader = false;
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
