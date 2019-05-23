import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyAccountComponent } from './containers/my-account/my-account.component';
import { FavoritesComponent } from './presentaitonal/favorites/favorites.component';
import { MyTimeHomeToursComponent } from './presentaitonal/my-time-home-tours/my-time-home-tours.component';
import { ProfileComponent } from './presentaitonal/profile/profile.component';
import { ResetPasswordComponent } from './presentational/reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: MyAccountComponent },
      { path: 'reset-password', component: ResetPasswordComponent }
    ])
  ],
  declarations: [
    MyAccountComponent,
    FavoritesComponent,
    MyTimeHomeToursComponent,
    ProfileComponent,
    ResetPasswordComponent
  ]
})
export class PortalFeatureMyAccountModule {}
