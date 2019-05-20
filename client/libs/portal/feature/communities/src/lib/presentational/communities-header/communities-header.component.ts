import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CommunitiesView } from '../../view-model/communities';

@Component({
  selector: 'brookfield-communities-header',
  templateUrl: './communities-header.component.html',
  styleUrls: ['./communities-header.component.scss']
})
export class CommunitiesHeaderComponent implements OnInit {
  @Output() viewChanged = new EventEmitter<string>();
  @Input() view: CommunitiesView;
  constructor() {}
  ngOnInit() {}

  changeView(view: CommunitiesView) {
    this.viewChanged.emit(view);
  }

  openFilter() {
    // todo implement this
  }
}
