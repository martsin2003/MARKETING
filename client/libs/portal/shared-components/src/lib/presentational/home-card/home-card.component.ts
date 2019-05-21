import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'brookfield-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit {
  @Output() cardSelected = new EventEmitter<string>();
  @Input() community: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  compareCard(id) {
    console.log('id: ', this.community.id);
    this.cardSelected.emit(this.community.id);
  }

  goToDetails() {
    this.router.navigateByUrl('/home-plan-detail');
  }
}
