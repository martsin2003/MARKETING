import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FindMyHomeComponent } from './find-my-home/find-my-home.component';
import { HomePlansComponent } from './home-plans/home-plans.component';
import { EmpowerInnovationsComponent } from './empower-innovations/empower-innovations.component';
import { WhyBrookfieldComponent } from './why-brookfield/why-brookfield.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CommunityMicrositeComponent } from './community-microsite/community-microsite.component';

@Component({
  selector: 'brookfield-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brookfield';

  links = [
    { path: '', component: HomeComponent, label: 'Home' },
    { path: 'find-my-home', component: FindMyHomeComponent, label: 'Find My Home' },
    { path: 'home-plans', component: HomePlansComponent, label: 'Home Plans' },
    { path: 'empower-innovations', component: EmpowerInnovationsComponent, label: 'Empower Innovations' },
    { path: 'why', component: WhyBrookfieldComponent, label: 'Why Brookfield' },
    { path: 'my-account', component: MyAccountComponent, label: 'My Account' },
    { path: 'community-microsite', component: CommunityMicrositeComponent, label: 'Community Microsite' },
  ];
}
