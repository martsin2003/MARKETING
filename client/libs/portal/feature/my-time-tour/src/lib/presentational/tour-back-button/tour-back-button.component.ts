import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'brookfield-tour-back-button',
  templateUrl: './tour-back-button.component.html',
  styleUrls: ['./tour-back-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
