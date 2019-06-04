import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { MoveInNowHomesState } from './move-in-now-homes.reducer';
import {
  LoadMoveInNowHomes,
  MoveInNowHomesLoaded,
  MoveInNowHomesLoadError,
  MoveInNowHomesActionTypes
} from './move-in-now-homes.actions';

@Injectable()
export class MoveInNowHomesEffects {
  @Effect() loadMoveInNowHomes$ = this.dataPersistence.fetch(
    MoveInNowHomesActionTypes.LoadMoveInNowHomes,
    {
      run: (action: LoadMoveInNowHomes, state: MoveInNowHomesState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new MoveInNowHomesLoaded([]);
      },

      onError: (action: LoadMoveInNowHomes, error) => {
        console.error('Error', error);
        return new MoveInNowHomesLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<MoveInNowHomesState>
  ) {}
}
