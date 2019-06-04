import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'brookfield-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCardComponent implements OnInit {
  @ViewChild('cardImage') cardImage: ElementRef<HTMLImageElement>;

  @Output() cardSelected = new EventEmitter<string>();
  @Input() community: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  compareCard(id) {}

  goToDetails() {
    this.router.navigateByUrl('/find/home-plan-detail');
  }
}
