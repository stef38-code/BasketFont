import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {featureAdapter, State} from './state';
import {Categorie} from '../../dto';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectCategoriesState: MemoizedSelector<object,
  State> = createFeatureSelector<State>('categories');

export const selectAll: (
  state: object
) => Categorie[] = featureAdapter.getSelectors(selectCategoriesState).selectAll;

export const selectById = (id: number) => {
  // @ts-ignore
  return createSelector(this.selectAll, (all: Categorie[]) => {
    if (all) {
      return all.find(p => p.id === id);
    } else {
      return null;
    }
  });
};

export const selectCategoriesError: MemoizedSelector<object, any> = createSelector(
  selectCategoriesState,
  getError
);

export const selectCategoriesIsLoading: MemoizedSelector<object, boolean> = createSelector(selectCategoriesState, getIsLoading);
