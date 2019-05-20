import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { SiteplansState } from './siteplans.reducer';
import {
  LoadSiteplans,
  SiteplansLoaded,
  SiteplansLoadError,
  SiteplansActionTypes
} from './siteplans.actions';

@Injectable()
export class SiteplansEffects {
  @Effect() loadSiteplans$ = this.dataPersistence.fetch(SiteplansActionTypes.LoadSiteplans, {
    run: (action: LoadSiteplans, state: SiteplansState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new SiteplansLoaded([]);
    },

    onError: (action: LoadSiteplans, error) => {
      console.error('Error', error);
      return new SiteplansLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<SiteplansState>
  ) {}
}
