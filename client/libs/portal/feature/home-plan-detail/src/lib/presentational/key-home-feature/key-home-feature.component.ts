import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brookfield-key-home-feature',
  templateUrl: './key-home-feature.component.html',
  styleUrls: ['./key-home-feature.component.scss']
})
export class KeyHomeFeatureComponent implements OnInit {
  @Input() featureKeys: string[];

  constructor() {}

  ngOnInit() {}
}
