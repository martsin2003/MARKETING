import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brookfield-home-tour-card',
  templateUrl: './home-tour-card.component.html',
  styleUrls: ['./home-tour-card.component.scss']
})
export class HomeTourCardComponent implements OnInit {
  @Input() previus: boolean;
  @Input() moveInNow: boolean;

  constructor() {}

  ngOnInit() {}
}
