import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brookfield-interactive-floor-plan',
  templateUrl: './interactive-floor-plan.component.html',
  styleUrls: ['./interactive-floor-plan.component.scss']
})
export class InteractiveFloorPlanComponent implements OnInit {
  showContent = 'elevation-select';

  constructor() {}

  ngOnInit() {}
}
