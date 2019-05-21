import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'brookfield-community-card',
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.scss']
})
export class CommunityCardComponent implements OnInit {
  @Output() cardSelected = new EventEmitter<string>();
  @Input() community: any;
  constructor() {}

  ngOnInit() {}

  compareCard(id) {
    console.log('id: ', this.community.id);
    this.cardSelected.emit(this.community.id);
  }
}
