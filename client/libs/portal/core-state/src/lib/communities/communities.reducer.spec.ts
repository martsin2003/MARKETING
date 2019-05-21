import { CommunitiesLoaded } from './communities.actions';
import { CommunitiesState, Entity, initialState, communitiesReducer } from './communities.reducer';

describe('Communities Reducer', () => {
  const getCommunitiesId = it => it['id'];
  let createCommunities;

  beforeEach(() => {
    createCommunities = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Communities actions ', () => {
    it('should return set the list of known Communities', () => {
      const communitiess = [createCommunities('PRODUCT-AAA'), createCommunities('PRODUCT-zzz')];
      const action = new CommunitiesLoaded(communitiess);
      const result: CommunitiesState = communitiesReducer(initialState, action);
      const selId: string = getCommunitiesId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = communitiesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
