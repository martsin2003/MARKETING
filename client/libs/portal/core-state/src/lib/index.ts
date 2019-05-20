import * as fromSiteplans from './siteplans/siteplans.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  [fromSiteplans.SITEPLANS_FEATURE_KEY]: fromSiteplans.SiteplansState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromSiteplans.SITEPLANS_FEATURE_KEY]: fromSiteplans.siteplansReducer
};
