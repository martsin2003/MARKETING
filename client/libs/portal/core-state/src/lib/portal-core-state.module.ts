import { environment } from './../../../../../apps/portal/src/environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '.';
import { SiteplansEffects } from './siteplans/siteplans.effects';
import { SiteplansFacade } from './siteplans/siteplans.facade';
import { NxModule } from '@nrwl/nx';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommunitiesEffects } from './communities/communities.effects';
import { CommunitiesFacade } from './communities/communities.facade';
@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([SiteplansEffects, CommunitiesEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [SiteplansFacade, CommunitiesFacade]
})
export class PortalCoreStateModule {}
