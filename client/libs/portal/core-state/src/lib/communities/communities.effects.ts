import { CommunitiesService } from './../../../../core-data/data-services/src/lib/communities/communities.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { CommunitiesPartialState } from './communities.reducer';
import {
  LoadCommunities,
  CommunitiesLoaded,
  CommunitiesLoadError,
  CommunitiesActionTypes
} from './communities.actions';
import { switchMap, map, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';

@Injectable()
export class CommunitiesEffects {
  @Effect() loadCommunities$ = this.dataPersistence.fetch(CommunitiesActionTypes.LoadCommunities, {
    run: (action: LoadCommunities, state: CommunitiesPartialState) => {
      console.log('action: ', action);
      console.log('state: ', state);
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return this.communitiesService.loadCommunities().pipe(
        map(result => {
          console.log('result: ', result);
          return new CommunitiesLoaded(result.allTblCommunities.nodes);
        })
      );
    },

    onError: (action: LoadCommunities, error) => {
      console.error('Error', error);
      return new CommunitiesLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private communitiesService: CommunitiesService,
    private dataPersistence: DataPersistence<CommunitiesPartialState>
  ) {}
}
