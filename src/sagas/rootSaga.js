import { call } from 'redux-saga/effects'

function* rootSaga() {
  yield call(console.log, 'RootSaga was called');
}

export default rootSaga;
