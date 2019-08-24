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
import rentSagas from './Rent';
import complianceSagas from './Compliance';
import systemSagas from './System';
import documentTypeSagas from './DocumentType';
import documentSagas from './Document';
import certificateTypeSagas from './CertificateType';
import certificateSagas from './Certificate'

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
        paymentFrequencySagas(),
        rentSagas(),
        complianceSagas(),
        systemSagas(),
        documentTypeSagas(),
        documentSagas(),
        certificateTypeSagas(),
        certificateSagas()
    ]);
}
