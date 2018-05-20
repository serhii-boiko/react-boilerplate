import { SWITCH_LANGUAGE } from './actionTypes';

export function switchLanguage(locale) {
    return {
        type: SWITCH_LANGUAGE,
        payload: locale,
    };
}

