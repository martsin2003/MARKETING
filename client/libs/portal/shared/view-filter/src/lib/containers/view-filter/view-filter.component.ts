import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brookfield-view-filter',
  templateUrl: './view-filter.component.html',
  styleUrls: ['./view-filter.component.scss']
})
export class ViewFilterComponent implements OnInit {

  @Input() openFilter?: {open: boolean};

  constructor() { }

  ngOnInit() {
  }

}
