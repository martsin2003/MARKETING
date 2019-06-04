import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { MoveInNowHomesState } from './move-in-now-homes.reducer';
import { moveInNowHomesQuery } from './move-in-now-homes.selectors';
import { LoadMoveInNowHomes } from './move-in-now-homes.actions';

@Injectable()
export class MoveInNowHomesFacade {
  loaded$ = this.store.pipe(select(moveInNowHomesQuery.getLoaded));
  allMoveInNowHomes$ = this.store.pipe(select(moveInNowHomesQuery.getAllMoveInNowHomes));
  selectedMoveInNowHome$ = this.store.pipe(select(moveInNowHomesQuery.getSelectedMINHome));

  constructor(private store: Store<MoveInNowHomesState>) {}

  loadAll() {
    this.store.dispatch(new LoadMoveInNowHomes());
  }
}
