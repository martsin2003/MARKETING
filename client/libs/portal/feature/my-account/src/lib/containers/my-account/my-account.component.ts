import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'brookfield-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  selectedOption = 'my-profile';

  constructor() {}

  ngOnInit() {}

  selectOption(option: string) {
    this.selectedOption = option;
  }
}
