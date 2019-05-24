import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brookfield-my-time-tour',
  templateUrl: './my-time-tour.component.html',
  styleUrls: ['./my-time-tour.component.scss']
})
export class MyTimeTourComponent implements OnInit {
  step = 0;
  constructor() {}

  ngOnInit() {}

  timeStepCompleted() {
    this.step++;
  }

  nextStep() {
    this.step++;
  }

  back() {
    this.step--;
  }

  cancelAppointment() {
    this.step = 0;
  }
}
