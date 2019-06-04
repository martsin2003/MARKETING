import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COMMUNITIES_FEATURE_KEY, CommunitiesState } from './communities.reducer';
import * as fromCommunities from './communities.reducer';

const getCommunitiesState = createFeatureSelector<CommunitiesState>(COMMUNITIES_FEATURE_KEY);

const getLoaded = (state: CommunitiesState) => state.loaded;
const getError = (state: CommunitiesState) => state.error;
const getLoading = (state: CommunitiesState) => state.isLoading;
const getSelectedCommunityId = (state: CommunitiesState) => state.selectedCommunityId;

const getCommunitiesEntities = createSelector(
  getCommunitiesState,
  fromCommunities.selectCommunitiesEntities
);

const getAllCommunities = createSelector(
  getCommunitiesState,
  getLoaded,
  (state: CommunitiesState, isLoaded) => {
    return isLoaded ? fromCommunities.selectAllCommunities : [];
  }
);

const getSelectedCommunity = createSelector(
  getCommunitiesEntities,
  getSelectedCommunityId,
  (communitiesEntities, selectedId) => {
    return selectedId ? communitiesEntities[selectedId] : null;
  }
);

export const communitiesQuery = {
  getLoaded,
  getError,
  getLoading,
  getCommunitiesEntities,
  getAllCommunities,
  getSelectedCommunity
};
