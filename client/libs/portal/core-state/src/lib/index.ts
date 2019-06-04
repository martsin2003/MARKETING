import { ActionReducerMap } from '@ngrx/store';
import * as fromCommunities from './communities/communities.reducer';
import * as fromCommunityPlans from './community-plans/community-plans.reducer';
import * as fromMINHomes from './move-in-now-homes/move-in-now-homes.reducer';

export interface AppState {
  [fromCommunities.COMMUNITIES_FEATURE_KEY]: fromCommunities.CommunitiesState;
  [fromCommunityPlans.COMMUNITYPLANS_FEATURE_KEY]: fromCommunityPlans.CommunityPlansState;
  [fromMINHomes.MOVEINNOWHOMES_FEATURE_KEY]: fromMINHomes.MoveInNowHomesState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromCommunities.COMMUNITIES_FEATURE_KEY]: fromCommunities.communitiesReducer,
  [fromCommunityPlans.COMMUNITYPLANS_FEATURE_KEY]: fromCommunityPlans.communityPlansReducer,
  [fromMINHomes.MOVEINNOWHOMES_FEATURE_KEY]: fromMINHomes.moveInNowHomesReducer
};
