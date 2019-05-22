import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalFeatureHomeModule, portalFeatureHomeRoutes } from '@brookfield/portal/feature/home';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', children: portalFeatureHomeRoutes },
  {
    path: 'home-plans',
    loadChildren: '@brookfield/portal/feature/home-plans#PortalFeatureHomePlansModule'
  },
  {
    path: 'empower',
    loadChildren: '@brookfield/portal/feature/empower#PortalFeatureEmpowerModule'
  },
  {
    path: 'resources',
    loadChildren: '@brookfield/portal/feature/resources#PortalFeatureResourcesModule'
  },
  {
    path: 'my-time-tour',
    loadChildren: '@brookfield/portal/feature/my-time-tour#PortalFeatureMyTimeTourModule'
  },
  {
    path: 'find',
    children: [
      {
        path: 'communities',
        loadChildren: '@brookfield/portal/feature/communities#PortalFeatureCommunitiesModule'
      },
      {
        path: 'community-microsite',
        loadChildren: '@brookfield/portal/feature/community#PortalFeatureCommunityModule'
      },
      {
        path: 'home-plan-detail',
        loadChildren:
          '@brookfield/portal/feature/home-plan-detail#PortalFeatureHomePlanDetailModule'
      }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: true }), PortalFeatureHomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
