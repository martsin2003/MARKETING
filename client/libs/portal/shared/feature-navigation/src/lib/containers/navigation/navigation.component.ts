import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter, takeUntil, distinctUntilChanged, map } from 'rxjs/operators';
import { Subject, Observable, combineLatest } from 'rxjs';
import { DetectMobileViewService } from '@brookfield/common/utilities';

@Component({
  selector: 'brookfield-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit, OnDestroy {
  menuOpened: boolean;
  desktopMenuOpened: boolean;
  showMobileHeader$: Observable<boolean>;
  absoluteHeader = true;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private urlsWithAbsoluteHeader = ['/home'];

  constructor(
    private router: Router,
    private location: Location,
    private detectMobileViewService: DetectMobileViewService
  ) {}

  ngOnInit() {
    this.showMobileHeader$ = this.shouldShowMobileHeader();
    this.listenToRouteChange();
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

  private shouldShowMobileHeader(): Observable<boolean> {
    return combineLatest(
      this.detectMobileViewService.isMobileView().pipe(distinctUntilChanged()),
      this.detectMobileViewService.isTabletView().pipe(distinctUntilChanged())
    ).pipe(
      map(([isMobileView, isTabletView]) => {
        return isMobileView || isTabletView;
      }),
      takeUntil(this.destroy$)
    );
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
