import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'brookfield-more-info-form',
  templateUrl: './more-info-form.component.html',
  styleUrls: ['./more-info-form.component.scss']
})
export class MoreInfoFormComponent implements OnInit {
  @Input() containerHomeDesignDetail: { title: string; homeName: string };

  constructor() {}

  ngOnInit() {}
}
