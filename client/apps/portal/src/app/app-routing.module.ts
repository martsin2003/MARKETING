import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpowerInnovationsComponent } from './empower-innovations/empower-innovations.component';
import { WhyBrookfieldComponent } from './why-brookfield/why-brookfield.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CommunityMicrositeComponent } from './community-microsite/community-microsite.component';
import {
  PortalFeatureHomeModule,
  portalFeatureHomeRoutes
} from '@brookfield/portal/feature/home';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', children: portalFeatureHomeRoutes },
  {
    path: 'find-my-home',
    loadChildren:
      '@brookfield/portal/feature/find-my-home#PortalFeatureFindMyHomeModule'
  },
  {
    path: 'home-plans',
    loadChildren:
      '@brookfield/portal/feature/home-plans#PortalFeatureHomePlansModule'
  },
  {
    path: 'home-plan-detail',
    loadChildren:
      '@brookfield/portal/feature/home-plan-detail#PortalFeatureHomePlanDetailModule'
  },
  { path: 'empower-innovations', component: EmpowerInnovationsComponent },
  { path: 'why', component: WhyBrookfieldComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'community-microsite', component: CommunityMicrositeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: true }),
    PortalFeatureHomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
