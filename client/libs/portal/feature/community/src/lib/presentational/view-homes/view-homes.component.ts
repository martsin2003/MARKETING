import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HomeCardComponent } from 'libs/portal/shared-components/src/lib/presentational/home-card/home-card.component';

@Component({
  selector: 'brookfield-view-homes',
  templateUrl: './view-homes.component.html',
  styleUrls: ['./view-homes.component.scss']
})
export class ViewHomesComponent implements OnInit, AfterViewInit {
  @ViewChild(HomeCardComponent, { read: HomeCardComponent }) homeCard: HomeCardComponent;

  selectedOption = 'home-plans';
  filter = { open: false };
  startCarouselInit: { start: boolean };

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.homeCard.cardImage.nativeElement.onload = () => {
      setTimeout(() => {
        this.startCarouselInit = { start: true };
      }, 100);
    };
  }

  selectViewOption(option: string) {
    this.selectedOption = option;
  }

  openFilter() {
    this.filter = { open: true };
  }
}
