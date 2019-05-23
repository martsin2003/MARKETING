import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'brookfield-tour-verification-thanks',
  templateUrl: './tour-verification-thanks.component.html',
  styleUrls: ['./tour-verification-thanks.component.scss']
})
export class TourVerificationThanksComponent implements OnInit {
  @Output() next = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  continue() {
    this.next.emit();
  }
}
