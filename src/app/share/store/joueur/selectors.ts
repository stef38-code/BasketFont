import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {featureAdapter, State} from './state';
import {Joueur} from '../../dto';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectJoueursState: MemoizedSelector<object,
  State> = createFeatureSelector<State>('joueurs');

export const selectAll: (
  state: object
) => Joueur[] = featureAdapter.getSelectors(selectJoueursState).selectAll;

export const selectById = (id: number) => {
  // @ts-ignore
  return createSelector(this.selectAll, (all: Joueur[]) => {
    if (all) {
      return all.find(p => p.id === id);
    } else {
      return null;
    }
  });
};

export const selectJoueursError: MemoizedSelector<object, any> = createSelector(
  selectJoueursState,
  getError
);

export const selectJoueursIsLoading: MemoizedSelector<object, boolean> = createSelector(selectJoueursState, getIsLoading);
