import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'brookfield-secondary-nav-desktop',
  templateUrl: './secondary-nav-desktop.component.html',
  styleUrls: ['./secondary-nav-desktop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondaryNavDesktopComponent implements OnInit {
  @Output() navigate = new EventEmitter<string>();
  @Input() absoluteNav: boolean;
  @Input() desktopMenuOpened: boolean;

  constructor() {}

  ngOnInit() {}

  navigateTo(url: string) {
    this.navigate.emit(url);
  }
}
