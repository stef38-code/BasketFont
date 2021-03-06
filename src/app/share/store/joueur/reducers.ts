import { Actions, ActionTypes } from './actions';
import { featureAdapter, initialState, State } from './state';

export function joueursReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.SELECT_ID_REQUEST: {
      return {
        ...state,
        selectedUserId: action.payload
      };
    }
    case ActionTypes.LOAD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_SUCCESS: {
      console.log('----------------',action.payload);
      console.log('----------------',action.payload.items);
      return featureAdapter.addAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null
      });
    }
    case ActionTypes.LOAD_FAILURE: {
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
