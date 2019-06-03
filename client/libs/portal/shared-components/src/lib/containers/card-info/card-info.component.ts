import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Community } from 'libs/portal/core-data/data-services/src/lib/communities/communities.model';

@Component({
  selector: 'brookfield-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {
  @Input() community: Community;
  @Output() cardSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  compareCard(id: string) {
    this.cardSelected.emit(id);
  }
}
