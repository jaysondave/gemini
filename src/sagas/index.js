import {all} from 'redux-saga/effects';
import authSagas from './Auth';
import categorySagas from './Category';
import userSagas from './User';
import buildingTypeSagas from './BuildingType';
import bodyTypeSagas from './BodyType';
import componentSagas from './Component';
import subComponentSagas from './SubComponent';
import buildingSagas from './Building';
import bodySagas from './Body';
import outdoorSagas from './Outdoor';

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        categorySagas(),
        userSagas(),
        buildingTypeSagas(),
        bodyTypeSagas(),
        componentSagas(),
        subComponentSagas(),
        buildingSagas(),
        bodySagas(),
        outdoorSagas()
    ]);
}
