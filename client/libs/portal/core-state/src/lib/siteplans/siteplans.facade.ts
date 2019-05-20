import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { SiteplansState } from './siteplans.reducer';
import { siteplansQuery } from './siteplans.selectors';
import { LoadSiteplans } from './siteplans.actions';

@Injectable({ providedIn: 'root' })
export class SiteplansFacade {
  loaded$ = this.store.pipe(select(siteplansQuery.getLoaded));
  allSiteplans$ = this.store.pipe(select(siteplansQuery.getAllSiteplans));
  selectedSiteplans$ = this.store.pipe(select(siteplansQuery.getSelectedSiteplans));

  constructor(private store: Store<SiteplansState>) {}

  loadAll() {
    this.store.dispatch(new LoadSiteplans());
  }
}
