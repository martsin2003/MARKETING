import { Component } from '@angular/core';

@Component({
  selector: 'brookfield-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brookfield';

  links = [
    { path: '', label: 'Home' },
    { path: 'find-my-home', label: 'Find My Home' },
    { path: 'home-plans', label: 'Home Plans' },
    { path: 'empower-innovations', label: 'Empower Innovations' },
    { path: 'why', label: 'Why Brookfield' },
    { path: 'my-account', label: 'My Account' },
    { path: 'community-microsite', label: 'Community Microsite' },
  ];
}
