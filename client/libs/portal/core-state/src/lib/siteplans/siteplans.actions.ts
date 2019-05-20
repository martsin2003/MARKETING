import { Siteplan } from '@brookfield/portal/core-data/data-services';
import { Action } from '@ngrx/store';

export enum SiteplansActionTypes {
  LoadSiteplans = '[Siteplans] Load Siteplans',
  SiteplansLoaded = '[Siteplans] Siteplans Loaded',
  SiteplansLoadError = '[Siteplans] Siteplans Load Error'
}

export class LoadSiteplans implements Action {
  readonly type = SiteplansActionTypes.LoadSiteplans;
}

export class SiteplansLoadError implements Action {
  readonly type = SiteplansActionTypes.SiteplansLoadError;
  constructor(public payload: any) {}
}

export class SiteplansLoaded implements Action {
  readonly type = SiteplansActionTypes.SiteplansLoaded;
  constructor(public payload: Siteplan[]) {}
}

export type SiteplansAction = LoadSiteplans | SiteplansLoaded | SiteplansLoadError;

export const fromSiteplansActions = {
  LoadSiteplans,
  SiteplansLoaded,
  SiteplansLoadError
};
