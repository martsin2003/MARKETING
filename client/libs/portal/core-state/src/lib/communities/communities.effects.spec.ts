import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CommunitiesEffects } from './communities.effects';
import { LoadCommunities, CommunitiesLoaded } from './communities.actions';

describe('CommunitiesEffects', () => {
  let actions: Observable<any>;
  let effects: CommunitiesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([])],
      providers: [CommunitiesEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(CommunitiesEffects);
  });

  describe('loadCommunities$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadCommunities() });
      expect(effects.loadCommunities$).toBeObservable(
        hot('-a-|', { a: new CommunitiesLoaded([]) })
      );
    });
  });
});
