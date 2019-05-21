import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { CommunitiesPartialState } from './communities.reducer';
import { communitiesQuery } from './communities.selectors';
import { LoadCommunities } from './communities.actions';

@Injectable()
export class CommunitiesFacade {
  loaded$ = this.store.pipe(select(communitiesQuery.getLoaded));
  allCommunities$ = this.store.pipe(select(communitiesQuery.getAllCommunities));
  selectedCommunities$ = this.store.pipe(select(communitiesQuery.getSelectedCommunities));

  constructor(private store: Store<CommunitiesPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadCommunities());
  }
}
