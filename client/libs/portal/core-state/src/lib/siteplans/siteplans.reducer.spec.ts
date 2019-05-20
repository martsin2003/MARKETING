import { SiteplansLoaded } from './siteplans.actions';
import { SiteplansState, Entity, initialState, siteplansReducer } from './siteplans.reducer';

describe('Siteplans Reducer', () => {
  const getSiteplansId = it => it['id'];
  let createSiteplans;

  beforeEach(() => {
    createSiteplans = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Siteplans actions ', () => {
    it('should return set the list of known Siteplans', () => {
      const siteplanss = [createSiteplans('PRODUCT-AAA'), createSiteplans('PRODUCT-zzz')];
      const action = new SiteplansLoaded(siteplanss);
      const result: SiteplansState = siteplansReducer(initialState, action);
      const selId: string = getSiteplansId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = siteplansReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
