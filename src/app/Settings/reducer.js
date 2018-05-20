/* eslint indent: ["error", 4, { "SwitchCase": 1 }] */

import { SWITCH_LANGUAGE } from './actionTypes';

const INIT_STATE = {
    locale: {
        languageId: 'english',
        locale: 'en',
        name: 'English',
        icon: 'us',
    },
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SWITCH_LANGUAGE:
            return {
                ...state,
                locale: action.payload,
            };
        default:
            return state;
    }
};
