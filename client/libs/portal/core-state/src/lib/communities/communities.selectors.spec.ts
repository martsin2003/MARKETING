import { Entity, CommunitiesState } from './communities.reducer';
import { communitiesQuery } from './communities.selectors';

describe('Communities Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCommunitiesId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createCommunities = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      communities: {
        list: [
          createCommunities('PRODUCT-AAA'),
          createCommunities('PRODUCT-BBB'),
          createCommunities('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Communities Selectors', () => {
    it('getAllCommunities() should return the list of Communities', () => {
      const results = communitiesQuery.getAllCommunities(storeState);
      const selId = getCommunitiesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedCommunities() should return the selected Entity', () => {
      const result = communitiesQuery.getSelectedCommunities(storeState);
      const selId = getCommunitiesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = communitiesQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = communitiesQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
