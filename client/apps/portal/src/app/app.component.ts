import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ScrollToPageTopService } from '@brookfield/common/utilities';
import { Observable, Subject, fromEvent, combineLatest } from 'rxjs';
import { takeUntil, debounceTime, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'brookfield-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('footer') footer: ElementRef<HTMLDivElement>;
  @ViewChild('navigation') navigation: ElementRef<HTMLDivElement>;
  @ViewChild('mainAppContianer') mainAppContianer: ElementRef<HTMLDivElement>;

  isMobileView$: Observable<boolean>;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private scrollToPageTopService: ScrollToPageTopService) {
    this.scrollToPageTopService.scrollTopOnNavigation();
  }

  ngOnInit() {
    this.subscribeToWindowResize();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setMinHeightOfMainAppContainer();
    }, 700);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  subscribeToWindowResize() {
    const lastResizeEvent = fromEvent(window, 'resize').pipe(debounceTime(400));

    const throttledResizeEvents = fromEvent(window, 'resize').pipe(throttleTime(400));

    combineLatest(lastResizeEvent, throttledResizeEvents)
      .pipe(takeUntil(this.destroy$))
      .subscribe(values => {
        this.setMinHeightOfMainAppContainer();
      });
  }

  setMinHeightOfMainAppContainer() {
    const newMinHeight =
      window.innerHeight -
      this.footer.nativeElement.clientHeight -
      this.navigation.nativeElement.clientHeight;
    this.mainAppContianer.nativeElement.style.minHeight =
      newMinHeight > 0 ? `${newMinHeight}px` : `0px`;
  }
}
