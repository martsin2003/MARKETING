import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'brookfield-tour-back-button',
  templateUrl: './tour-back-button.component.html',
  styleUrls: ['./tour-back-button.component.scss']
})
export class TourBackButtonComponent implements OnInit {
  @Output() goBack = new EventEmitter<string>();
  @Input() color: string;
  constructor() {}

  ngOnInit() {}

  back() {
    this.goBack.emit();
  }
}
