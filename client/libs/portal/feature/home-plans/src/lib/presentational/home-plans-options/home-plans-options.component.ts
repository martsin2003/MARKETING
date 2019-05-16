import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'brookfield-home-plans-options',
  templateUrl: './home-plans-options.component.html',
  styleUrls: ['./home-plans-options.component.scss']
})
export class HomePlansOptionsComponent implements OnInit {
  homePlansTypes = [
    { type: 'Single-Family Homes' },
    { type: 'Townhomes' },
    { type: 'Condos' },
    { type: 'See All Home Plans' }
  ];

  constructor(private bottomSheetRef: MatBottomSheetRef<HomePlansOptionsComponent>) {}

  ngOnInit() {}

  selectHomePlansType({ type }) {
    this.bottomSheetRef.dismiss(type);
  }
}
