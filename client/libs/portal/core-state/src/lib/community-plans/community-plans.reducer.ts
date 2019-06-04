import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { CommunityPlansAction, CommunityPlansActionTypes } from './community-plans.actions';
import { CommunityPlan } from '@brookfield/portal/core-data/data-services';

export const COMMUNITYPLANS_FEATURE_KEY = 'communityPlans';

export interface CommunityPlansState extends EntityState<CommunityPlan> {
  selectedCommunityPlanId?: string | number;
  loading: boolean;
  loaded: boolean;
  error?: any;
}

function selectCommunityPlanPrimaryKey(communityPlan: CommunityPlan): string {
  return communityPlan.planid;
}

export const adapter: EntityAdapter<CommunityPlan> = createEntityAdapter<CommunityPlan>({
  selectId: selectCommunityPlanPrimaryKey
});

export const initialState: CommunityPlansState = adapter.getInitialState({
  selectedCommunityPlanId: null,
  loading: false,
  loaded: false
});

export function communityPlansReducer(
  state: CommunityPlansState = initialState,
  action: CommunityPlansAction
): CommunityPlansState {
  switch (action.type) {
    case CommunityPlansActionTypes.CommunityPlansLoaded: {
      return adapter.upsertMany(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
  }
  return state;
}

export const {
  selectIds: selectCommunityPlansIds,
  selectEntities: selectCommunityPlansEntities,
  selectAll: selectAllCommunityPlans,
  selectTotal: selectCommunityPlansTotal
} = adapter.getSelectors();
