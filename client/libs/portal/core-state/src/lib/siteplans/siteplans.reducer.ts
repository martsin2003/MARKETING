import { Siteplan } from '@brookfield/portal/core-data/data-services';
import { SiteplansAction, SiteplansActionTypes } from './siteplans.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const SITEPLANS_FEATURE_KEY = 'siteplans';

export interface SiteplansState extends EntityState<Siteplan> {
  selectedSiteplanId: string | null;
  loaded: boolean;
  error?: any;
}

export const adapter: EntityAdapter<Siteplan> = createEntityAdapter<Siteplan>();

export const initialState: SiteplansState = adapter.getInitialState({
  selectedSiteplanId: null,
  loaded: false
});

export function siteplansReducer(
  state: SiteplansState = initialState,
  action: SiteplansAction
): SiteplansState {
  switch (action.type) {
    case SiteplansActionTypes.SiteplansLoaded: {
      return adapter.upsertMany(action.payload, {
        ...state,
        loaded: true
      });
    }
  }
  return state;
}

export const {
  selectIds: selectSiteplanIds,
  selectEntities: selectSiteplanEntities,
  selectAll: selectAllSiteplans,
  selectTotal: selectSiteplanTotal
} = adapter.getSelectors();
