import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FindMyHomeComponent } from './find-my-home/find-my-home.component';
import { HomePlansComponent } from './home-plans/home-plans.component';
import { EmpowerInnovationsComponent } from './empower-innovations/empower-innovations.component';
import { WhyBrookfieldComponent } from './why-brookfield/why-brookfield.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CommunityMicrositeComponent } from './community-microsite/community-microsite.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'find-my-home', component: FindMyHomeComponent },
  { path: 'home-plans', component: HomePlansComponent },
  { path: 'empower-innovations', component: EmpowerInnovationsComponent },
  { path: 'why', component: WhyBrookfieldComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'community-microsite', component: CommunityMicrositeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
