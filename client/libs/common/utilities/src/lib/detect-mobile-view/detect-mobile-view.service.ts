import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';

const MOBILE_TO_TABLET_BREAKPOINT = '767px';
const TABLET_TO_DESKTOP_BREAKPOINT = '991px';

@Injectable({
  providedIn: 'root'
})
export class DetectMobileViewService {
  private _isMobileView$ = new BehaviorSubject<boolean>(false);
  private _isTabletView$ = new BehaviorSubject<boolean>(false);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.setInitialViewsValue();
    this.setUpTabletBreakpointObservation();
    this.setUpDesktopBreakpointObservation();
  }

  isMobileView(): Observable<boolean> {
    return this._isMobileView$.asObservable();
  }

  isTabletView(): Observable<boolean> {
    return this._isTabletView$.asObservable();
  }

  // One time check as the `observe` method in constructor doesn't always fire on page render
  private setInitialViewsValue() {
    this._isMobileView$.next(
      this.breakpointObserver.isMatched(`(max-width: ${MOBILE_TO_TABLET_BREAKPOINT})`)
    );
    this._isTabletView$.next(
      this.breakpointObserver.isMatched(`(max-width: ${TABLET_TO_DESKTOP_BREAKPOINT})`)
    );
  }

  private setUpTabletBreakpointObservation() {
    this.breakpointObserver
      .observe([`(max-width: ${MOBILE_TO_TABLET_BREAKPOINT})`])
      .subscribe(result => {
        this._isMobileView$.next(result.matches);
      });
  }

  private setUpDesktopBreakpointObservation() {
    this.breakpointObserver
      .observe([`(max-width: ${TABLET_TO_DESKTOP_BREAKPOINT})`])
      .subscribe(result => {
        this._isTabletView$.next(result.matches);
      });
  }
}
