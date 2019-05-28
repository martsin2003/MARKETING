import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'brookfield-search-homes',
  templateUrl: './search-homes.component.html',
  styleUrls: ['./search-homes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchHomesComponent implements OnInit {
  @Input() isMobileView: boolean;

  constructor() {}

  ngOnInit() {}
}
