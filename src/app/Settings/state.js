// @flow

export const initState = {
  locale: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  },
};

export interface State {
  +locale: {
    +languageId: string,
    +locale: string,
    +name: string,
    +icon: string,
  };
}
