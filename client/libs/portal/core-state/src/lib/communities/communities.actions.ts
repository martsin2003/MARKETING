import { Action } from '@ngrx/store';
import { Entity } from './communities.reducer';

export enum CommunitiesActionTypes {
  LoadCommunities = '[Communities] Load Communities',
  CommunitiesLoaded = '[Communities] Communities Loaded',
  CommunitiesLoadError = '[Communities] Communities Load Error'
}

export class LoadCommunities implements Action {
  readonly type = CommunitiesActionTypes.LoadCommunities;
}

export class CommunitiesLoadError implements Action {
  readonly type = CommunitiesActionTypes.CommunitiesLoadError;
  constructor(public payload: any) {}
}

export class CommunitiesLoaded implements Action {
  readonly type = CommunitiesActionTypes.CommunitiesLoaded;
  constructor(public payload: Entity[]) {}
}

export type CommunitiesAction = LoadCommunities | CommunitiesLoaded | CommunitiesLoadError;

export const fromCommunitiesActions = {
  LoadCommunities,
  CommunitiesLoaded,
  CommunitiesLoadError
};
