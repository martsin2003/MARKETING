import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SITEPLANS_FEATURE_KEY, SiteplansState } from './siteplans.reducer';
import * as fromSiteplans from './siteplans.reducer';

const selectSiteplansState = createFeatureSelector<SiteplansState>(SITEPLANS_FEATURE_KEY);

export const getSelectedSiteplanId = (state: SiteplansState) => state.selectedSiteplanId;

const getLoaded = createSelector(
  selectSiteplansState,
  (state: SiteplansState) => state.loaded
);
const getError = createSelector(
  selectSiteplansState,
  (state: SiteplansState) => state.error
);

const getSiteplanEntities = createSelector(
  selectSiteplansState,
  fromSiteplans.selectSiteplanEntities
);

const getAllSiteplans = createSelector(
  selectSiteplansState,
  getLoaded,
  (state: SiteplansState, isLoaded) => {
    return isLoaded ? fromSiteplans.selectAllSiteplans : [];
  }
);

const getSelectedSiteplans = createSelector(
  getSiteplanEntities,
  getSelectedSiteplanId,
  (siteplanEntities, selectedId) => {
    return selectedId ? siteplanEntities[selectedId] : null;
  }
);

export const siteplansQuery = {
  getLoaded,
  getError,
  getAllSiteplans,
  getSelectedSiteplans
};
