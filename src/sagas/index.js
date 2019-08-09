import {all} from 'redux-saga/effects';
import authSagas from './Auth';
import categorySagas from './Category';
import userSagas from './User';
import buildingTypeSagas from './BuildingType';
import bodySagas from './BodyType';
import componentSagas from './Component';
import subComponentSagas from './SubComponent';
import buildingSagas from './Building';

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        categorySagas(),
        userSagas(),
        buildingTypeSagas(),
        bodySagas(),
        componentSagas(),
        subComponentSagas(),
        buildingSagas()
    ]);
}
