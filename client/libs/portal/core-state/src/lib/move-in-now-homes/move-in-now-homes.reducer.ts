import { MoveInNowHomesAction, MoveInNowHomesActionTypes } from './move-in-now-homes.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { MoveInNowHome } from '@brookfield/portal/core-data/data-services';

export const MOVEINNOWHOMES_FEATURE_KEY = 'moveInNowHomes';

export interface MoveInNowHomesState extends EntityState<MoveInNowHome> {
  selectedMINHomeId?: string | null;
  loading: boolean;
  loaded: boolean;
  error?: any;
}

function selectMINHomesPrimaryKey(minHome: MoveInNowHome): string {
  return minHome.specid;
}

export const adapter: EntityAdapter<MoveInNowHome> = createEntityAdapter<MoveInNowHome>({
  selectId: selectMINHomesPrimaryKey
});

export const initialState: MoveInNowHomesState = adapter.getInitialState({
  selectedMINHomeId: null,
  loading: false,
  loaded: false
});

export function moveInNowHomesReducer(
  state: MoveInNowHomesState = initialState,
  action: MoveInNowHomesAction
): MoveInNowHomesState {
  switch (action.type) {
    case MoveInNowHomesActionTypes.MoveInNowHomesLoaded: {
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
  selectIds: selectMINHomesIds,
  selectEntities: selectMINHomesEntities,
  selectAll: selectAllMINHomes,
  selectTotal: selectMINHomesTotal
} = adapter.getSelectors();
