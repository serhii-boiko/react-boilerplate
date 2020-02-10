import { SWITCH_LANGUAGE } from './actionTypes';
import { createReducer } from '@/common/utils/store';

const initState = {
  locale: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  },
};

const reducer = {
  [SWITCH_LANGUAGE]: (state, action) => ({ ...state, locale: action.payload }),
};

export default (state = initState, action) => createReducer(reducer, state, action);
