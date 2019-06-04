import { CommunityPlan } from '@brookfield/portal/core-data/data-services';
import { Action } from '@ngrx/store';

export enum CommunityPlansActionTypes {
  LoadCommunityPlans = '[CommunityPlans] Load CommunityPlans',
  CommunityPlansLoaded = '[CommunityPlans] CommunityPlans Loaded',
  CommunityPlansLoadError = '[CommunityPlans] CommunityPlans Load Error'
}

export class LoadCommunityPlans implements Action {
  readonly type = CommunityPlansActionTypes.LoadCommunityPlans;
}

export class CommunityPlansLoadError implements Action {
  readonly type = CommunityPlansActionTypes.CommunityPlansLoadError;
  constructor(public payload: any) {}
}

export class CommunityPlansLoaded implements Action {
  readonly type = CommunityPlansActionTypes.CommunityPlansLoaded;
  constructor(public payload: CommunityPlan[]) {}
}

export type CommunityPlansAction =
  | LoadCommunityPlans
  | CommunityPlansLoaded
  | CommunityPlansLoadError;

export const fromCommunityPlansActions = {
  LoadCommunityPlans,
  CommunityPlansLoaded,
  CommunityPlansLoadError
};
