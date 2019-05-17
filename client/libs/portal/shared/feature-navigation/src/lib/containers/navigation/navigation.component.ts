import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'brookfield-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  menuOpened: boolean;
  desktopMenuOpened: boolean;
  isMobileScreen: boolean;
  absoluteHeader = true;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private urlsWithAbsoluteHeader = ['/home'];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private location: Location
  ) {
    breakpointObserver.observe(['(max-width: 959px)']).subscribe(result => {
      this.isMobileScreen = result.matches;
    });
  }

  ngOnInit() {
    this.listenToRouteChange();
    // One time check as the `observe` method in constructor doesn't always fire on page render
    this.isMobileScreen = this.breakpointObserver.isMatched('(max-width: 959px)');
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  toggleMenuOpen() {
    this.menuOpened = !this.menuOpened;
  }

  routeToUrl(url: string) {
    this.menuOpened = false;
    this.router.navigateByUrl(url);
  }

  setMenuOpenedState(opened: boolean) {
    this.desktopMenuOpened = opened;
  }

  private listenToRouteChange() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        const url = this.location.path();
        this.absoluteHeader = this.urlsWithAbsoluteHeader.indexOf(url) >= 0;
      });
  }
}
