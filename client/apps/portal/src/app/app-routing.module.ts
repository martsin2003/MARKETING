import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalFeatureHomeModule, portalFeatureHomeRoutes } from '@brookfield/portal/feature/home';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', children: portalFeatureHomeRoutes },
  {
    path: 'find-my-home',
    loadChildren: '@brookfield/portal/feature/find-my-home#PortalFeatureFindMyHomeModule'
  },
  {
    path: 'home-plans',
    loadChildren: '@brookfield/portal/feature/home-plans#PortalFeatureHomePlansModule'
  },
  {
    path: 'home-plan-detail',
    loadChildren: '@brookfield/portal/feature/home-plan-detail#PortalFeatureHomePlanDetailModule'
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
    path: 'home-design-detail',
    loadChildren:
      '@brookfield/portal/feature/home-design-detail#PortalFeatureHomeDesignDetailModule'
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: true }), PortalFeatureHomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
