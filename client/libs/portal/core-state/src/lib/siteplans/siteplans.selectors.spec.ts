import { Entity, SiteplansState } from './siteplans.reducer';
import { siteplansQuery } from './siteplans.selectors';

describe('Siteplans Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSiteplansId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createSiteplans = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      siteplans: {
        list: [
          createSiteplans('PRODUCT-AAA'),
          createSiteplans('PRODUCT-BBB'),
          createSiteplans('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Siteplans Selectors', () => {
    it('getAllSiteplans() should return the list of Siteplans', () => {
      const results = siteplansQuery.getAllSiteplans(storeState);
      const selId = getSiteplansId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedSiteplans() should return the selected Entity', () => {
      const result = siteplansQuery.getSelectedSiteplans(storeState);
      const selId = getSiteplansId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = siteplansQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = siteplansQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
