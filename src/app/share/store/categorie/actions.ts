import { Action } from '@ngrx/store';
import {Categorie, Joueur} from '../../dto';


export enum ActionTypesCategorie {
  LOAD_REQUEST = '[Categorie] Load Request',
  LOAD_FAILURE = '[Categorie] Load Failure',
  LOAD_SUCCESS = '[Categorie] Load Success'
}
export class LoadRequestAction implements Action {
  readonly type = ActionTypesCategorie.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
  readonly type = ActionTypesCategorie.LOAD_FAILURE;
  constructor(public payload: string) {}
}

export class LoadSuccessAction implements Action {
  readonly type = ActionTypesCategorie.LOAD_SUCCESS;
  constructor(public payload: { items: Categorie[]} ) {}
}

export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction;
