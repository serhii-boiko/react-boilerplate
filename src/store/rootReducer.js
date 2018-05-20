import { combineReducers } from 'redux';
import Settings from '@/app/Settings';
import Example from '@/app/Example';

export default combineReducers({
    [Example.constants.NAME]: Example.reducer,
    [Settings.constants.NAME]: Settings.reducer,
});
