import { Action } from '@ngrx/store';
import {Joueur} from '../../dto';


export enum ActionTypes {
  LOAD_REQUEST = '[Joueur] Load Request',
  LOAD_FAILURE = '[Joueur] Load Failure',
  LOAD_SUCCESS = '[Joueur] Load Success',
  SELECT_ID_REQUEST = '[Joueur] Select ID',
}
export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: string) {}
}
export class SelectIDAction implements Action {
  readonly type = ActionTypes.SELECT_ID_REQUEST;
  constructor(public payload: number) {}
}
export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: Joueur[]} ) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction | SelectIDAction;
