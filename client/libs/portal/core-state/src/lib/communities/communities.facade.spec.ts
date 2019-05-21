import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { CommunitiesEffects } from './communities.effects';
import { CommunitiesFacade } from './communities.facade';

import { communitiesQuery } from './communities.selectors';
import { LoadCommunities, CommunitiesLoaded } from './communities.actions';
import { CommunitiesState, Entity, initialState, communitiesReducer } from './communities.reducer';

interface TestSchema {
  communities: CommunitiesState;
}

describe('CommunitiesFacade', () => {
  let facade: CommunitiesFacade;
  let store: Store<TestSchema>;
  let createCommunities;

  beforeEach(() => {
    createCommunities = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('communities', communitiesReducer, { initialState }),
          EffectsModule.forFeature([CommunitiesEffects])
        ],
        providers: [CommunitiesFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(CommunitiesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allCommunities$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allCommunities$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `CommunitiesLoaded` to manually submit list for state management
     */
    it('allCommunities$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allCommunities$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(new CommunitiesLoaded([createCommunities('AAA'), createCommunities('BBB')]));

        list = await readFirst(facade.allCommunities$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
