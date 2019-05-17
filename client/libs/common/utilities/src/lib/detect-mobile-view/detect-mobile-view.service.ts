import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetectMobileViewService {
  private _isMobileView$ = new BehaviorSubject<boolean>(false);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.setInitialMobileViewValue();
    this.setUpBreakpointObservation();
  }

  isMobileView(): Observable<boolean> {
    return this._isMobileView$.asObservable();
  }

  private setInitialMobileViewValue() {
    // One time check as the `observe` method in constructor doesn't always fire on page render
    this._isMobileView$.next(this.breakpointObserver.isMatched('(max-width: 959px)'));
  }

  private setUpBreakpointObservation() {
    this.breakpointObserver.observe(['(max-width: 959px)']).subscribe(result => {
      this._isMobileView$.next(result.matches);
    });
  }
}
