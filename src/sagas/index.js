import {all} from 'redux-saga/effects';
import authSagas from './Auth';
import categorySagas from './Category';
import userSagas from './User';

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        categorySagas(),
        userSagas()
    ]);
}
