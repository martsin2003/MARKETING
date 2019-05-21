import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'brookfield-community-microsite',
  templateUrl: './community-microsite.component.html',
  styleUrls: ['./community-microsite.component.scss']
})
export class CommunityMicrositeComponent implements OnInit, AfterViewInit {

  @ViewChild('description') description: ElementRef<HTMLDivElement>;

  desrciptionText = `Innovative design meets relaxed Loudoun County lakefront style — all at a price that ensures
  this opportunity won't last long. Make the morning coffee in your spacious, gourmet kitchen. Sit
  on your front porch and savor each sip. Spend the day kayaking or paddleboarding. Cast a line or
  pack a picnic. This community is full of outdoor fun in the Loudoun countryside. Hike the trails
  amid Virginia's stunning natural beauty. This is home.`;
  readLess: boolean;

  communityImages = [
    'assets/images/desktop/cm-slider-second-image.png',
    'assets/images/desktop/cm-slider-first-image.png'
  ];

  secondSliderCommynityImages = [
    'assets/images/desktop/cm-second-slider-first-img.png',
    'assets/images/desktop/cm-second-slider-second-img.png',
    'assets/images/desktop/cm-second-slider-third-img.png'
  ];

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    fromEvent(window, 'resize').subscribe(() => {
      this.setDescriptionValuesLength();
    });
    this.setDescriptionValuesLength();
  }

  setDescriptionValuesLength() {
    if (window.outerWidth <= 500) {
      this.description.nativeElement.textContent = `${this.desrciptionText.slice(0, 127).trim()}...`;
    } else {
      this.description.nativeElement.textContent = this.desrciptionText;
    }
  }

  readMore() {
    this.readLess = !this.readLess;
    if (this.description.nativeElement.textContent.length <= 130) {
      this.description.nativeElement.textContent = this.desrciptionText;
    } else {
      this.description.nativeElement.textContent = `${this.desrciptionText.slice(0, 127).trim()}...`;
    }
  }
}
