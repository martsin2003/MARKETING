import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brookfield-community-microsite',
  templateUrl: './community-microsite.component.html',
  styleUrls: ['./community-microsite.component.scss']
})
export class CommunityMicrositeComponent implements OnInit {
  communityImages = [
    'assets/images/desktop/cm-slider-second-image.png',
    'assets/images/desktop/cm-slider-first-image.png'
  ];

  constructor() {}

  ngOnInit() {}
}
