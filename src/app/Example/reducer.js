// @flow

import { ADD, ADD_SUCCESS, REMOVE, REMOVE_SUCCESS } from './actionTypes';
import { initState } from './state';
import type { State } from './state';
import type { Action } from './actions';

export default (state: State = initState, action: Action): State => {
  switch (action.type) {
    case REMOVE_SUCCESS: {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case ADD_SUCCESS: {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case REMOVE:
    case ADD:
    default:
      return state;
  }
};
