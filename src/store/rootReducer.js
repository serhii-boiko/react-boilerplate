import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as Settings from '@/app/Settings';
import * as Example from '@/app/Example';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    [Example.constants.NAME]: Example.reducer,
    [Settings.constants.NAME]: Settings.reducer,
  });
