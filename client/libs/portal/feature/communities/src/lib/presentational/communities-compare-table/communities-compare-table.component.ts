import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brookfield-communities-compare-table',
  templateUrl: './communities-compare-table.component.html',
  styleUrls: ['./communities-compare-table.component.scss']
})
export class CommunitiesCompareTableComponent implements OnInit {
  communities = [{}, {}, {}, {}];
  characteristics = [
    {
      name: 'Starting Price',
      values: ['$454.650', '$354.600', '$434.000', '$544.750']
    },
    {
      name: 'Location',
      values: ['Purcellville, VA', 'Leesburg, VA', 'Purcellville, VA', 'Purcellville, VA']
    },
    {
      name: 'Home Typed',
      values: ['Townhomes', 'Townhomes', 'Townhomes', 'Townhomes']
    },
    {
      name: 'Beds',
      values: ['3-4', '4-5', '4-6', '3-4']
    },
    {
      name: 'Baths',
      values: ['2.5-4', '2.5-5', '2.5-6', '2.5-4']
    },
    {
      name: 'Square Feet',
      values: ['2.5-4', '2.5-5', '2.5-6', '2.5-4']
    },
    {
      name: 'Square Feet',
      values: ['2,345-4,344', '2,235-5,334', '1,235-6,234', '1,235-4,345']
    },
    {
      name: 'Move-In-Now Homes',
      values: ['2 Available', '4 Available', '3 Available', '2 Available']
    },
    {
      name: 'Amenities',
      type: 'icon',
      values: ['2 Available', '4 Available', '3 Available', '2 Available']
    }
  ];
  constructor() {}

  ngOnInit() {}
}
