import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

import { ADD, REMOVE } from './actionTypes';

import { addSuccess, removeSuccess } from './actions';

const asyncAdd = async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

const asyncRemove = async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

function* remove() {
  yield call(asyncRemove);
  yield put(removeSuccess());
}

function* add() {
  yield call(asyncAdd);
  yield put(addSuccess());
}

export function* sageRemove() {
  yield takeEvery(REMOVE, remove);
}

export function* sagaAdd() {
  yield takeEvery(ADD, add);
}

export default function* rootSaga() {
  yield all([fork(sageRemove), fork(sagaAdd)]);
}
