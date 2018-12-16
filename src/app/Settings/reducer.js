// @flow

import { SWITCH_LANGUAGE } from './actionTypes';
import { initState } from './state';
import type { State } from './state';
import type { Action } from './actions';

export default (state: State = initState, action: Action): State => {
  switch (action.type) {
    case SWITCH_LANGUAGE: {
      return {
        ...state,
        locale: action.payload,
      };
    }
    default:
      return state;
  }
};
