import { all } from 'redux-saga/effects';
import Example from '@/app/Example';

const { sagas: exampleSagas } = Example;

export default function* rootSaga() {
    yield all([
        exampleSagas(),
    ]);
}
