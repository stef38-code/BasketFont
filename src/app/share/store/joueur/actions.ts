import { Action } from '@ngrx/store';
import {Joueur} from '../../dto';


export enum ActionTypes {
  LOAD_REQUEST = '[Joueur] Load Request',
  LOAD_FAILURE = '[Joueur] Load Failure',
  LOAD_SUCCESS = '[Joueur] Load Success'
}
export class LoadRequestAction implements Action {
  readonly type = ActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;
  constructor(public payload: string) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;
  constructor(public payload: { items: Joueur[]} ) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
