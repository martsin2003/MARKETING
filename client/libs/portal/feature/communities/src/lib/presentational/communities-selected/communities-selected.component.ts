import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brookfield-communities-selected',
  templateUrl: './communities-selected.component.html',
  styleUrls: ['./communities-selected.component.scss']
})
export class CommunitiesSelectedComponent implements OnInit {
  @Input() communities: any[];
  constructor() {}

  ngOnInit() {}
}
