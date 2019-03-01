import { all, takeEvery, call, put } from 'redux-saga/effects';

const someAsyncCall = () => new Promise((resolve) => {
  const waitMs = 3000;
  const result = 1000;
  setTimeout(resolve, waitMs, result);
});

function* timerAsyncCall() {
  const asyncResult = yield call(someAsyncCall);
  yield put({ type: 'COUNTER_SET', payload: asyncResult })
}

function* rootSaga() {
  yield all([
    takeEvery('COUNTER_ASYNC', timerAsyncCall),
  ]);
}

export default rootSaga;
