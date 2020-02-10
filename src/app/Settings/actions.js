import { SWITCH_LANGUAGE, CHANGE_DISPLAY_RESOLUTION } from './actionTypes';

export function switchLanguage(locale) {
  return {
    type: SWITCH_LANGUAGE,
    payload: locale,
  };
}

export function changeDisplayResolution() {
  return {
    type: CHANGE_DISPLAY_RESOLUTION,
  };
}
