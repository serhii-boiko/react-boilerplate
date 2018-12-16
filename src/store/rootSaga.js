import { all } from 'redux-saga/effects';
import { sagas as exampleSagas } from '@/app/Example';

export default function* rootSaga() {
  yield all([exampleSagas()]);
}
