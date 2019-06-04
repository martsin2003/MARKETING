import { environment } from './../../../../../apps/portal/src/environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '.';
import { NxModule } from '@nrwl/nx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommunitiesEffects } from './communities/communities.effects';
import { CommunityPlansEffects } from './community-plans/community-plans.effects';
@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CommunitiesEffects, CommunityPlansEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class PortalCoreStateModule {}
