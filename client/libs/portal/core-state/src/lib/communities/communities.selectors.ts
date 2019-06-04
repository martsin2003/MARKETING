import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCommunities from './communities.reducer';

const getCommunitiesState = createFeatureSelector<fromCommunities.CommunitiesState>(
  fromCommunities.COMMUNITIES_FEATURE_KEY
);

const getLoaded = createSelector(
  getCommunitiesState,
  (state: fromCommunities.CommunitiesState) => state.loaded
);
const getLoading = createSelector(
  getCommunitiesState,
  (state: fromCommunities.CommunitiesState) => state.loading
);
const getError = createSelector(
  getCommunitiesState,
  (state: fromCommunities.CommunitiesState) => state.error
);
const getSelectedCommunityId = createSelector(
  getCommunitiesState,
  (state: fromCommunities.CommunitiesState) => state.selectedCommunityId
);

const getCommunitiesEntities = createSelector(
  getCommunitiesState,
  fromCommunities.selectCommunitiesEntities
);

const getAllCommunities = createSelector(
  getCommunitiesState,
  fromCommunities.selectAllCommunities
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
