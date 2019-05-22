import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { fromEvent, combineLatest, Subject } from 'rxjs';
import { throttleTime, debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'brookfield-community-header',
  templateUrl: './community-header.component.html',
  styleUrls: ['./community-header.component.scss']
})
export class CommunityHeaderComponent implements OnInit, OnDestroy, OnChanges {
  @Input() menuItems: { title: string; id: string };
  @Output() viewComponent: EventEmitter<string> = new EventEmitter();

  observableComponent: string;

  showCommunityHeader: boolean;
  showMenu: boolean;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  ngOnInit() {
    const lastScrollEvent = fromEvent(document, 'scroll').pipe(debounceTime(400));

    const throttledScrollEvents = fromEvent(document, 'scroll').pipe(throttleTime(400));

    combineLatest(lastScrollEvent, throttledScrollEvents)
      .pipe(takeUntil(this.destroy$))
      .subscribe(values => {
        if (window.pageYOffset > 142) {
          this.showCommunityHeader = true;
        } else {
          this.showCommunityHeader = false;
        }
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.menuItems && changes.menuItems.currentValue) {
      this.observableComponent = this.menuItems[0].title;
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  openMenu() {
    this.showMenu = !this.showMenu;
  }

  selectItem(component: any) {
    this.observableComponent = component.title;
    this.showMenu = !this.showMenu;
    this.viewComponent.emit(component.id);
  }
}
