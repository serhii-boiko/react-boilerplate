import { ADD_SUCCESS, REMOVE_SUCCESS } from './actionTypes';
import { reHydrateState } from '@/store/middleware/localstore';
import { createReducer } from '@/common/utils/store';

const defaultState = {
  value: 0,
};

const initState = reHydrateState(defaultState, {
  value: (initialState, value) => {
    initialState.value = value;

    return initialState;
  },
});

const reducer = {
  [REMOVE_SUCCESS]: (state) => ({ ...state, value: state.value - 1 }),
  [ADD_SUCCESS]: (state) => ({ ...state, value: state.value + 1 }),
};

export default (state = initState, action) => createReducer(reducer, state, action);
