import {Actions,  ActionTypesCategorie} from './actions';
import { featureAdapter, initialState, State } from './state';

export function categoriesReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypesCategorie.LOAD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypesCategorie.LOAD_SUCCESS: {
      return featureAdapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypesCategorie.LOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
