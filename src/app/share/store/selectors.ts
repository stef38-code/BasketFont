import { createSelector, MemoizedSelector } from '@ngrx/store';
import {
  JoueursStoreSelectors
} from './joueur';

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
