import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { CommunitiesService } from '@brookfield/portal/core-data/data-services';
import {
  LoadCommunities,
  CommunitiesLoaded,
  CommunitiesLoadError,
  CommunitiesActionTypes
} from './communities.actions';
import { map } from 'rxjs/operators';
import { CommunitiesState } from './communities.reducer';

@Injectable()
export class CommunitiesEffects {
  @Effect() loadCommunities$ = this.dataPersistence.fetch(CommunitiesActionTypes.LoadCommunities, {
    run: (action: LoadCommunities, state: CommunitiesState) => {
      return this.communitiesService.loadCommunities().pipe(
        map(result => {
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
    private dataPersistence: DataPersistence<CommunitiesState>
  ) {}
}
