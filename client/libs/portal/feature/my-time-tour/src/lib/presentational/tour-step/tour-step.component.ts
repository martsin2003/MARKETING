import { Component, OnInit, Input } from '@angular/core';
import { TourStepData } from '../../view-model/tour-step.interface';

@Component({
  selector: 'brookfield-tour-step',
  templateUrl: './tour-step.component.html',
  styleUrls: ['./tour-step.component.scss']
})
export class TourStepComponent implements OnInit {
  @Input() whiteBackground: boolean;
  @Input() data: TourStepData;
  steps: number[];
  constructor() {}

  ngOnInit() {
    this.steps = [];
    this.steps.length = this.data.stepsCount;
  }
}
