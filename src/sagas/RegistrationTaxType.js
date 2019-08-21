import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    GET_REGISTRATION_TAX_TYPE_START,
    CREATE_REGISTRATION_TAX_TYPE,
    UPDATE_REGISTRATION_TAX_TYPE,
    DELETE_REGISTRATION_TAX_TYPE
} from "../constants/ActionTypes";
import {
    showMessage,
    hideLoader,
    userSignOut,
    fetchRegistrationTaxTypesSuccess,
    fetchRegistrationTaxTypes
} from "../actions";
import {RegistrationTaxTypeAPI} from "../apis";

const registrationTaxTypeAPI = new RegistrationTaxTypeAPI();
const fetchAllRequest = async () =>
    await  registrationTaxTypeAPI.fetchAll()
        .then(resp => resp)
        .catch(error => error);
const createRequest = async (body) =>
    await  registrationTaxTypeAPI.createItem(body)
        .then(resp => resp)
        .catch(error => error);
const updateRequest = async (payload) =>
    await  registrationTaxTypeAPI.updateItem(payload.id, payload.body)
        .then(resp => resp)
        .catch(error => error);
const deleteRequest = async (payload) =>
    await  registrationTaxTypeAPI.deleteItem(payload)
        .then(resp => resp)
        .catch(error => error);

function* fetchAll() {
    try {
        const res = yield call(fetchAllRequest);
        yield put(hideLoader());
        console.log({res});
        if (res.status !== 200) {
            switch (res.response.status) {
                case 401:
                    yield put(showMessage(res['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(res.message));
                    return
            }
        } else {
            yield put(fetchRegistrationTaxTypesSuccess(res.data.registration_tax_types));
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
function* create({payload}) {
    try {
        const res = yield call(createRequest, payload);
        yield put(hideLoader());
        console.log({res});
        if (res.status !== 200) {
            switch (res.response.status) {
                case 401:
                    yield put(showMessage(res['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(res.message));
                    return
            }
        } else {
            yield put(fetchRegistrationTaxTypes());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
function* update({payload}) {
    try {
        const res = yield call(updateRequest, payload);
        yield put(hideLoader());
        console.log({res});
        if (res.status !== 200) {
            switch (res.response.status) {
                case 401:
                    yield put(showMessage(res['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(res.message));
                    return
            }
        } else {
            yield put(fetchRegistrationTaxTypes());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
function* deleteItem({payload}) {
    try {
        const res = yield call(deleteRequest, payload);
        yield put(hideLoader());
        console.log({deleteSelectedBuildingType: res});
        if (res.status !== 200) {
            switch (res.response.status) {
                case 401:
                    yield put(showMessage(res['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(res.message));
                    return
            }
        } else {
            yield put(fetchRegistrationTaxTypes());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}

export function* fetchAllSaga() {
    yield takeEvery(GET_REGISTRATION_TAX_TYPE_START, fetchAll);
}
export function* createSaga() {
    yield takeEvery(CREATE_REGISTRATION_TAX_TYPE, create)
}
export function* updateSaga() {
    yield takeEvery(UPDATE_REGISTRATION_TAX_TYPE, update)
}
export function* deleteSaga() {
    yield takeEvery(DELETE_REGISTRATION_TAX_TYPE, deleteItem)
}
export default function* rootSaga() {
    yield all([
        fork(fetchAllSaga),
        fork(createSaga),
        fork(updateSaga),
        fork(deleteSaga),
    ]);
}