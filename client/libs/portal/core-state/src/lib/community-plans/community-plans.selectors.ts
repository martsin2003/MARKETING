import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCommunityPlans from './community-plans.reducer';

const getCommunityPlansState = createFeatureSelector<fromCommunityPlans.CommunityPlansState>(
  fromCommunityPlans.COMMUNITYPLANS_FEATURE_KEY
);

const getLoaded = createSelector(
  getCommunityPlansState,
  (state: fromCommunityPlans.CommunityPlansState) => state.loaded
);
const getLoading = createSelector(
  getCommunityPlansState,
  (state: fromCommunityPlans.CommunityPlansState) => state.loading
);
const getError = createSelector(
  getCommunityPlansState,
  (state: fromCommunityPlans.CommunityPlansState) => state.error
);
const getSelectedCommunityPlanId = createSelector(
  getCommunityPlansState,
  (state: fromCommunityPlans.CommunityPlansState) => state.selectedCommunityPlanId
);

const getCommunityPlansEntities = createSelector(
  getCommunityPlansState,
  fromCommunityPlans.selectCommunityPlansEntities
);

const getAllCommunityPlans = createSelector(
  getCommunityPlansState,
  fromCommunityPlans.selectAllCommunityPlans
);

const getSelectedCommunityPlan = createSelector(
  getCommunityPlansEntities,
  getSelectedCommunityPlanId,
  (communityPlans, selectedId) => {
    return selectedId ? communityPlans[selectedId] : null;
  }
);

export const communityPlansQuery = {
  getLoaded,
  getError,
  getCommunityPlansEntities,
  getAllCommunityPlans,
  getSelectedCommunityPlan
};
