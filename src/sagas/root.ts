import {delay as delaySaga} from 'redux-saga';
import {call, fork, put, take} from 'redux-saga/effects';
import {add, addLater} from '../actions/action';
import {ActionCreator, Action} from 'typescript-fsa';

// type unsafe...

function* runAddLater(num: number, time: number) {
  yield call(delaySaga, time);
  yield put(add({num}));
}

function* handleAddLater() {
  while (true) {
    const {payload: {num, delay}} = yield take(addLater);
    yield fork(runAddLater, num, delay);
  }
}

export default function* root() {
  yield fork(handleAddLater);
}
