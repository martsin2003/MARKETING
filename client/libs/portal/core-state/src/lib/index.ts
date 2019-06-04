import * as fromSiteplans from './siteplans/siteplans.reducer';
import * as fromCommunities from './communities/communities.reducer';
import * as fromCommunityPlans from './community-plans/community-plans.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  [fromSiteplans.SITEPLANS_FEATURE_KEY]: fromSiteplans.SiteplansState;
  [fromCommunities.COMMUNITIES_FEATURE_KEY]: fromCommunities.CommunitiesState;
  [fromCommunityPlans.COMMUNITYPLANS_FEATURE_KEY]: fromCommunityPlans.CommunityPlansState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromSiteplans.SITEPLANS_FEATURE_KEY]: fromSiteplans.siteplansReducer,
  [fromCommunities.COMMUNITIES_FEATURE_KEY]: fromCommunities.communitiesReducer,
  [fromCommunityPlans.COMMUNITYPLANS_FEATURE_KEY]: fromCommunityPlans.communityPlansReducer
};
