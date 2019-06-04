import { CommunitiesAction, CommunitiesActionTypes } from './communities.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { CommunityView, Community } from '@brookfield/portal/core-data/data-services';

export const COMMUNITIES_FEATURE_KEY = 'communities';

export interface CommunitiesState extends EntityState<CommunityView | Community> {
  selectedCommunityId?: string | null;
  isLoading: boolean;
  loaded: boolean;
  error?: any;
}

export const adapter: EntityAdapter<CommunityView | Community> = createEntityAdapter<
  CommunityView | Community
>();

export const initialState: CommunitiesState = adapter.getInitialState({
  selectedCommunityId: null,
  isLoading: false,
  loaded: false
});

export function communitiesReducer(
  state: CommunitiesState = initialState,
  action: CommunitiesAction
): CommunitiesState {
  switch (action.type) {
    case CommunitiesActionTypes.CommunitiesLoaded: {
      return adapter.upsertMany(action.payload, {
        ...state,
        isLoading: false,
        loaded: true
      });
    }
    case CommunitiesActionTypes.LoadCommunities: {
      return {
        ...state,
        isLoading: true
      };
    }
  }
  return state;
}

export const {
  selectIds: selectCommunitiesIds,
  selectEntities: selectCommunitiesEntities,
  selectAll: selectAllCommunities,
  selectTotal: selectCommunitiesTotal
} = adapter.getSelectors();
