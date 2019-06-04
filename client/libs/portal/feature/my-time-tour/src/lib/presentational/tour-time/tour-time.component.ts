import { TourStepData } from '../../view-model/tour-step.interface';
import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { MatDatepicker } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'brookfield-tour-time',
  templateUrl: './tour-time.component.html',
  styleUrls: ['./tour-time.component.scss']
})
export class TourTimeComponent implements OnInit {
  @Output() timeStepCompleted = new EventEmitter<string>();
  @Output() goBack = new EventEmitter<string>();
  @Input() isMobileView: boolean;

  data: TourStepData;
  tourTimeForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.data = {
      step: 1,
      stepsCount: 5,
      title: 'The Torrington',
      subTitle: 'Select a Date and Time to See'
    };
    this.tourTimeForm = this.initTourTimeForm();
  }

  continue() {
    this.timeStepCompleted.emit();
  }

  back() {
    this.goBack.emit();
  }

  initTourTimeForm(): FormGroup {
    return this.fb.group({
      date: null,
      time: null
    });
  }
}
