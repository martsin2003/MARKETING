import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brookfield-tour-confirm',
  templateUrl: './tour-confirm.component.html',
  styleUrls: ['./tour-confirm.component.scss']
})
export class TourConfirmComponent implements OnInit {
  @Output() cancelAppointment = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  cancelAppointmentClick() {
    this.cancelAppointment.emit();
  }
}
