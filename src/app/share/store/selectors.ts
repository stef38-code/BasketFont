import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  JoueursStoreSelectors
} from './joueur';
import {
  CategoriesStoreSelectors
} from './categorie';

export const selectError: MemoizedSelector<object, string> = createSelector(
  JoueursStoreSelectors.selectJoueursError,
  (myFeatureError: string) => {
    return myFeatureError;
  }
);

export const selectIsLoading: MemoizedSelector<object, boolean> = createSelector(
  JoueursStoreSelectors.selectJoueursIsLoading, (myFeature: boolean) => {
    return myFeature ;
  }
);
export const selectCategorieError: MemoizedSelector<object, string> = createSelector(
  CategoriesStoreSelectors.selectCategoriesError,
  (myFeatureError: string) => {
    return myFeatureError;
  }
);

export const selectCategorieIsLoading: MemoizedSelector<object, boolean> = createSelector(
  CategoriesStoreSelectors.selectCategoriesIsLoading, (myFeature: boolean) => {
    return myFeature ;
  }
);
