import { Component, OnInit } from '@angular/core';
import { fromEvent, combineLatest } from 'rxjs';
import { throttleTime, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'brookfield-community-header',
  templateUrl: './community-header.component.html',
  styleUrls: ['./community-header.component.scss']
})
export class CommunityHeaderComponent implements OnInit {
  showCommunityHeader: boolean;

  constructor() {}

  ngOnInit() {
    const lastScrollEvent = fromEvent(document, 'scroll').pipe(debounceTime(400));

    const throttledScrollEvents = fromEvent(document, 'scroll').pipe(throttleTime(400));

    combineLatest(lastScrollEvent, throttledScrollEvents).subscribe(values => {
      if (window.pageYOffset > 142) {
        this.showCommunityHeader = true;
      } else {
        this.showCommunityHeader = false;
      }
    });
  }
}
