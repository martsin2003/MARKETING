import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMINHomes from './move-in-now-homes.reducer';

const getMoveInNowHomesState = createFeatureSelector<fromMINHomes.MoveInNowHomesState>(
  fromMINHomes.MOVEINNOWHOMES_FEATURE_KEY
);

const getLoaded = createSelector(
  getMoveInNowHomesState,
  (state: fromMINHomes.MoveInNowHomesState) => state.loaded
);
const getLoading = createSelector(
  getMoveInNowHomesState,
  (state: fromMINHomes.MoveInNowHomesState) => state.loading
);
const getError = createSelector(
  getMoveInNowHomesState,
  (state: fromMINHomes.MoveInNowHomesState) => state.error
);
const getSelectedMINHomeId = createSelector(
  getMoveInNowHomesState,
  (state: fromMINHomes.MoveInNowHomesState) => state.selectedMINHomeId
);

const getMINHomesEntities = createSelector(
  getMoveInNowHomesState,
  fromMINHomes.selectMINHomesEntities
);

const getAllMoveInNowHomes = createSelector(
  getMoveInNowHomesState,
  fromMINHomes.selectAllMINHomes
);
const getSelectedMINHome = createSelector(
  getMINHomesEntities,
  getSelectedMINHomeId,
  (minHomesEntities, selectedId) => {
    return selectedId ? minHomesEntities[selectedId] : null;
  }
);

export const moveInNowHomesQuery = {
  getLoaded,
  getError,
  getLoading,
  getMINHomesEntities,
  getAllMoveInNowHomes,
  getSelectedMINHome
};
