import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindMyHomeComponent } from './find-my-home/find-my-home.component';
import { HomePlansComponent } from './home-plans/home-plans.component';
import { EmpowerInnovationsComponent } from './empower-innovations/empower-innovations.component';
import { WhyBrookfieldComponent } from './why-brookfield/why-brookfield.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CommunityMicrositeComponent } from './community-microsite/community-microsite.component';
import {
  PortalFeatureFindMyHomeModule,
  portalFeatureFindMyHomeRoutes
} from '@brookfield/portal/feature/find-my-home';
import {
  PortalFeatureHomeModule,
  portalFeatureHomeRoutes
} from '@brookfield/portal/feature/home';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', children: portalFeatureHomeRoutes },
  { path: 'find-my-home', component: FindMyHomeComponent },
  // { path: 'find-my-home', children: portalFeatureFindMyHomeRoutes },
  { path: 'home-plans', component: HomePlansComponent },
  { path: 'empower-innovations', component: EmpowerInnovationsComponent },
  { path: 'why', component: WhyBrookfieldComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'community-microsite', component: CommunityMicrositeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: true }),
    PortalFeatureFindMyHomeModule,
    PortalFeatureHomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
