import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brookfield-tour-verification-cc',
  templateUrl: './tour-verification-cc.component.html',
  styleUrls: ['./tour-verification-cc.component.scss']
})
export class TourVerificationCcComponent implements OnInit {
  @Output() nextStep = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  continue() {
    this.nextStep.emit();
  }
}
