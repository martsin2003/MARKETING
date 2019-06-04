import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { CommunitiesState } from './communities.reducer';
import { communitiesQuery } from './communities.selectors';
import { LoadCommunities } from './communities.actions';

@Injectable()
export class CommunitiesFacade {
  loaded$ = this.store.pipe(select(communitiesQuery.getLoaded));
  allCommunities$ = this.store.pipe(select(communitiesQuery.getAllCommunities));
  selectedCommunity$ = this.store.pipe(select(communitiesQuery.getSelectedCommunity));

  constructor(private store: Store<CommunitiesState>) {}

  loadAll() {
    this.store.dispatch(new LoadCommunities());
  }
}
