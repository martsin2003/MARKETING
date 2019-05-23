import { TourStepData } from '../../view-model/tour-step.interface';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brookfield-tour-time',
  templateUrl: './tour-time.component.html',
  styleUrls: ['./tour-time.component.scss']
})
export class TourTimeComponent implements OnInit {
  constructor() {}
  data: TourStepData;
  @Output() timeStepCompleted = new EventEmitter<string>();
  ngOnInit() {
    this.data = {
      step: 1,
      stepsCount: 5,
      title: 'The Torrington',
      subTitle: 'Select a Date and Time to See'
    };
  }

  continue() {
    this.timeStepCompleted.emit();
  }
}
