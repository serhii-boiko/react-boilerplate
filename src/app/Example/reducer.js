/* eslint indent: ["error", 4, { "SwitchCase": 1 }] */

import {
    ADD,
    ADD_SUCCESS,
    REMOVE,
    REMOVE_SUCCESS,
} from './actionTypes';

const INIT_STATE = {
    value: 0,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case REMOVE_SUCCESS:
            return {
                ...state,
                value: state.value - 1,
            };
        case ADD_SUCCESS:
            return {
                ...state,
                value: state.value + 1,
            };
        case REMOVE:
        case ADD:
        default:
            return state;
    }
};
