import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'brookfield-desktop-view-filter',
  templateUrl: './desktop-view-filter.component.html',
  styleUrls: ['./desktop-view-filter.component.scss']
})
export class DesktopViewFilterComponent implements OnInit, OnChanges {

  @Input() openFilter: {open: boolean};

  @ViewChild('filterTools') filterTools: ElementRef<HTMLDivElement>;

  closeFilter: boolean;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.openFilter && changes.openFilter.currentValue) {
      if(this.openFilter.open) {
        this.onOpenFilter();
      }
    }
  }

  onOpenFilter() {
    this.closeFilter = false;
    this.filterTools.nativeElement.style.display = 'flex';
  }

  onCloseFilter() {
    this.closeFilter = true;
    setTimeout(() => this.filterTools.nativeElement.style.display = 'none', 200);
  }

}
