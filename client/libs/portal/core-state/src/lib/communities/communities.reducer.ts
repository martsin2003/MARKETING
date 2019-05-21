import { CommunitiesAction, CommunitiesActionTypes } from './communities.actions';

export const COMMUNITIES_FEATURE_KEY = 'communities';

/**
 * Interface for the 'Communities' data used in
 *  - CommunitiesState, and
 *  - communitiesReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface CommunitiesState {
  list: Entity[]; // list of Communities; analogous to a sql normalized table
  selectedId?: string | number; // which Communities record has been selected
  loaded: boolean; // has the Communities list been loaded
  error?: any; // last none error (if any)
}

export interface CommunitiesPartialState {
  readonly [COMMUNITIES_FEATURE_KEY]: CommunitiesState;
}

export const initialState: CommunitiesState = {
  list: [],
  loaded: false
};

export function communitiesReducer(
  state: CommunitiesState = initialState,
  action: CommunitiesAction
): CommunitiesState {
  switch (action.type) {
    case CommunitiesActionTypes.CommunitiesLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
