import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommunitiesView } from '../../view-model/communities';

@Component({
  selector: 'brookfield-communities-header',
  templateUrl: './communities-header.component.html',
  styleUrls: ['./communities-header.component.scss']
})
export class CommunitiesHeaderComponent implements OnInit, OnChanges {
  @Output() viewChanged = new EventEmitter<string>();
  @Input() view: CommunitiesView;
  @Input() parentFilter: { open: boolean };

  filter: { open: boolean };

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.parentFilter && changes.parentFilter.currentValue) {
      this.filter = this.parentFilter;
    }
  }

  changeView(view: CommunitiesView) {
    this.viewChanged.emit(view);
  }

  openFilter() {
    this.filter = { open: true };
  }
}
