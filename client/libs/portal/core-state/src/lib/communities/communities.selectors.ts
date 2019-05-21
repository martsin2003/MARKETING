import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COMMUNITIES_FEATURE_KEY, CommunitiesState } from './communities.reducer';

// Lookup the 'Communities' feature state managed by NgRx
const getCommunitiesState = createFeatureSelector<CommunitiesState>(COMMUNITIES_FEATURE_KEY);

const getLoaded = createSelector(
  getCommunitiesState,
  (state: CommunitiesState) => state.loaded
);
const getError = createSelector(
  getCommunitiesState,
  (state: CommunitiesState) => state.error
);

const getAllCommunities = createSelector(
  getCommunitiesState,
  getLoaded,
  (state: CommunitiesState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getCommunitiesState,
  (state: CommunitiesState) => state.selectedId
);
const getSelectedCommunities = createSelector(
  getAllCommunities,
  getSelectedId,
  (communities, id) => {
    const result = communities.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const communitiesQuery = {
  getLoaded,
  getError,
  getAllCommunities,
  getSelectedCommunities
};
