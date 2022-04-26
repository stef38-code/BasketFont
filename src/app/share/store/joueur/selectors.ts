import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {featureAdapter, State} from './state';
import {Joueur} from '../../dto';

export const getIdSelected = (state: State): number => state.selectedUserId;
export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectJoueursState: MemoizedSelector<object,
  State> = createFeatureSelector<State>('joueurs');

export const selectAll: (
  state: object
) => Joueur[] = featureAdapter.getSelectors(selectJoueursState).selectAll;

export const selectById = (id: number) => {
  // @ts-ignore
  return createSelector(selectAll, (all: Joueur[]) => {
    if (all && id) {
      console.log('return ',all.length,id);
      return all.find(p => p.id === id);
    } else {
      console.log('return vide joueur');
      return {} as Joueur;
    }
  });
};

export const selectJoueursError: MemoizedSelector<object, any> = createSelector(
  selectJoueursState,
  getError
);

export const selectJoueursIsLoading: MemoizedSelector<object, boolean> = createSelector(selectJoueursState, getIsLoading);
export const getIDJoueursSelected: MemoizedSelector<object, number> = createSelector(selectJoueursState, getIdSelected);
