import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import {
  LoadCommunityPlans,
  CommunityPlansLoaded,
  CommunityPlansLoadError,
  CommunityPlansActionTypes
} from './community-plans.actions';
import { CommunityPlansState } from './community-plans.reducer';

@Injectable()
export class CommunityPlansEffects {
  @Effect() loadCommunityPlans$ = this.dataPersistence.fetch(
    CommunityPlansActionTypes.LoadCommunityPlans,
    {
      run: (action: LoadCommunityPlans, state: CommunityPlansState) => {
        return new CommunityPlansLoaded([]);
      },

      onError: (action: LoadCommunityPlans, error) => {
        console.error('Error', error);
        return new CommunityPlansLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CommunityPlansState>
  ) {}
}
