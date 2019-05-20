import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { SiteplansEffects } from './siteplans.effects';
import { LoadSiteplans, SiteplansLoaded } from './siteplans.actions';

describe('SiteplansEffects', () => {
  let actions: Observable<any>;
  let effects: SiteplansEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([])],
      providers: [SiteplansEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(SiteplansEffects);
  });

  describe('loadSiteplans$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadSiteplans() });
      expect(effects.loadSiteplans$).toBeObservable(hot('-a-|', { a: new SiteplansLoaded([]) }));
    });
  });
});
