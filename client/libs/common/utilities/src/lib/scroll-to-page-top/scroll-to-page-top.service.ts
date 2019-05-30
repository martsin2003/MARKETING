import { filter } from 'rxjs/operators';
import { Router, Event, Scroll } from '@angular/router';
import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollToPageTopService {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  scrollTopOnNavigation() {
    this.router.events.pipe(filter((e: Event): e is Scroll => e instanceof Scroll)).subscribe(e => {
      if (e.position) {
        // backward navigation
        // this.viewportScroller.scrollToPosition(e.position); - Enable this if need to scroll to previous position
        this.viewportScroller.scrollToPosition([0, 0]);
      } else if (e.anchor) {
        // anchor navigation
        this.viewportScroller.scrollToAnchor(e.anchor);
      } else {
        // forward navigation
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
