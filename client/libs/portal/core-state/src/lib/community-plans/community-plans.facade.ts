import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { CommunityPlansState } from './community-plans.reducer';
import { communityPlansQuery } from './community-plans.selectors';
import { LoadCommunityPlans } from './community-plans.actions';

@Injectable()
export class CommunityPlansFacade {
  loaded$ = this.store.pipe(select(communityPlansQuery.getLoaded));
  allCommunityPlans$ = this.store.pipe(select(communityPlansQuery.getAllCommunityPlans));
  selectedCommunityPlan$ = this.store.pipe(select(communityPlansQuery.getSelectedCommunityPlan));

  constructor(private store: Store<CommunityPlansState>) {}

  loadAll() {
    this.store.dispatch(new LoadCommunityPlans());
  }
}
