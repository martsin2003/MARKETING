import { MoveInNowHome } from '@brookfield/portal/core-data/data-services';
import { Action } from '@ngrx/store';

export enum MoveInNowHomesActionTypes {
  LoadMoveInNowHomes = '[MoveInNowHomes] Load MoveInNowHomes',
  MoveInNowHomesLoaded = '[MoveInNowHomes] MoveInNowHomes Loaded',
  MoveInNowHomesLoadError = '[MoveInNowHomes] MoveInNowHomes Load Error'
}

export class LoadMoveInNowHomes implements Action {
  readonly type = MoveInNowHomesActionTypes.LoadMoveInNowHomes;
}

export class MoveInNowHomesLoadError implements Action {
  readonly type = MoveInNowHomesActionTypes.MoveInNowHomesLoadError;
  constructor(public payload: any) {}
}

export class MoveInNowHomesLoaded implements Action {
  readonly type = MoveInNowHomesActionTypes.MoveInNowHomesLoaded;
  constructor(public payload: MoveInNowHome[]) {}
}

export type MoveInNowHomesAction =
  | LoadMoveInNowHomes
  | MoveInNowHomesLoaded
  | MoveInNowHomesLoadError;

export const fromMoveInNowHomesActions = {
  LoadMoveInNowHomes,
  MoveInNowHomesLoaded,
  MoveInNowHomesLoadError
};
