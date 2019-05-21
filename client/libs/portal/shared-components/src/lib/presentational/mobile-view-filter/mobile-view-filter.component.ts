import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'brookfield-mobile-view-filter',
  templateUrl: './mobile-view-filter.component.html',
  styleUrls: ['./mobile-view-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileViewFilterComponent implements OnInit, OnChanges {
  @Input() openFilter: { open: boolean };

  @ViewChild('viewsMenu') viewsMenu: ElementRef<HTMLDivElement>;
  @ViewChild('filterTools') filterTools: ElementRef<HTMLDivElement>;

  selectedViewType = 'See All Home Plans';

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.openFilter && changes.openFilter.currentValue) {
      if (this.openFilter.open) {
        this.openFilterTools();
      } else {
        this.closeFilterTools(null);
      }
    }
  }

  openFilterTools() {
    this.filterTools.nativeElement.style.display = 'block';
    setTimeout(() => {
      this.filterTools.nativeElement.style.transform = 'translateY(0px)';
    }, 10);
  }

  closeFilterTools(submitted: boolean) {
    if (submitted) {
      console.log('Update');
    }
    setTimeout(() => {
      this.filterTools.nativeElement.style.display = 'none';
    }, 500);
    this.filterTools.nativeElement.style.transform = 'translateY(100vh)';
  }
}
