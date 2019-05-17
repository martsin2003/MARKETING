import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
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
  isMobileScreen$: Observable<boolean>;
  absoluteHeader = true;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private urlsWithAbsoluteHeader = ['/home'];

  constructor(
    private router: Router,
    private location: Location,
    private detectMobileViewService: DetectMobileViewService
  ) {}

  ngOnInit() {
    this.isMobileScreen$ = this.detectMobileViewService.isMobileView();
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
