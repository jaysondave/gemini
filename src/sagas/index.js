import {all} from 'redux-saga/effects';
import authSagas from './Auth';
import categorySagas from './Category';
import userSagas from './User';
import buildingSagas from './BuildingType';
import bodySagas from './BodyType';
import componentSagas from './Component';
import subComponentSagas from './SubComponent';

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        categorySagas(),
        userSagas(),
        buildingSagas(),
        bodySagas(),
        componentSagas(),
        subComponentSagas()
    ]);
}
