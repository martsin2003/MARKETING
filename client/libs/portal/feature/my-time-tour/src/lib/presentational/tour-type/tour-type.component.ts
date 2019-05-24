import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brookfield-tour-type',
  templateUrl: './tour-type.component.html',
  styleUrls: ['./tour-type.component.scss']
})
export class TourTypeComponent implements OnInit {
  @Output() nextStep = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  continue() {
    this.nextStep.emit();
  }
}
