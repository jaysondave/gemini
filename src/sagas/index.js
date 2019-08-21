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
import targetSagas from './Target';
import floorSagas from './Floor';
import contractTypeSagas from './ContractType';
import registrationTaxTypeSagas from './RegistrationTaxType';
import paymentFrequencySagas from './PaymenyFrequency';

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
        outdoorSagas(),
        targetSagas(),
        floorSagas(),
        contractTypeSagas(),
        registrationTaxTypeSagas(),
        paymentFrequencySagas()
    ]);
}
