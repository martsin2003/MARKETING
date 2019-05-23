import { Component, OnInit, Input } from '@angular/core';
import { DetailInfo } from '../../models/home-detail-info.interface';

@Component({
  selector: 'brookfield-home-detail-info',
  templateUrl: './home-detail-info.component.html',
  styleUrls: ['./home-detail-info.component.scss']
})
export class HomeDetailInfoComponent implements OnInit {
  @Input() featureKeys: string[];
  @Input() detailInfo: DetailInfo;

  constructor() {}

  ngOnInit() {}
}
