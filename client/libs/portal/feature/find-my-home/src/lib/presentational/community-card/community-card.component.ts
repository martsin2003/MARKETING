import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'brookfield-community-card',
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunityCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
