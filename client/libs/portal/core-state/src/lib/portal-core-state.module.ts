import { environment } from './../../../../../apps/portal/src/environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '.';
import { SiteplansEffects } from './siteplans/siteplans.effects';
import { SiteplansFacade } from './siteplans/siteplans.facade';
import { NxModule, DataPersistence } from '@nrwl/nx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  COMMUNITIES_FEATURE_KEY,
  initialState as communitiesInitialState,
  communitiesReducer
} from './communities/communities.reducer';
import { CommunitiesEffects } from './communities/communities.effects';
import { CommunitiesFacade } from './communities/communities.facade';
import { storeFreeze } from 'ngrx-store-freeze';

@NgModule({
  imports: [
    CommonModule,
    // NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([SiteplansEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(
      { communities: communitiesReducer },
      {
        initialState: { communities: communitiesInitialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([CommunitiesEffects])
  ],
  providers: [SiteplansFacade, CommunitiesFacade, DataPersistence]
})
export class PortalCoreStateModule {}
