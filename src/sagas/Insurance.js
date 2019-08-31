import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    showMessage,
    hideLoader,
    userSignOut,
    fetchCadastrals,
    fetchCadastralsSuccess, fetchInsurancesSuccess, fetchInsurances
} from "../actions";
import {
    DELETE_CADASTRAL, DELETE_INSURANCE,
    FETCH_ALL_CADASTRAL, FETCH_ALL_INSURANCE,
    NEW_CADASTRAL, NEW_INSURANCE,
    UPDATE_CADASTRAL, UPDATE_INSURANCE,
} from "../constants/ActionTypes";
import {InsuranceAPI} from "../apis";

const insuranceAPI = new InsuranceAPI();
const fetchAllRequest = async (payload) =>
    await  insuranceAPI.fetchAll(payload)
        .then(resp => resp)
        .catch(error => error);
const createRequest = async (body) =>
    await  insuranceAPI.register(body)
        .then(resp => resp)
        .catch(error => error);
const updateRequest = async (payload) =>
    await  insuranceAPI.updateItem(payload.id, payload.body)
        .then(resp => resp)
        .catch(error => error);
const deleteRequest = async (payload) =>
    await  insuranceAPI.deleteItem(payload)
        .then(resp => resp)
        .catch(error => error);
function* fetchAll({payload}) {
    try {
        const res = yield call(fetchAllRequest, payload);
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
            yield put(fetchInsurancesSuccess(res.data.insurances));
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
            yield put(fetchInsurances(res.data.insurance.body_id));
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
            yield put(fetchInsurances(res.data.insurance.body_id));
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
            yield put(fetchInsurances(res.data.insurance.body_id));
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
export function* fetchAllSaga() {
    yield takeEvery(FETCH_ALL_INSURANCE, fetchAll);
}
export function* createSaga() {
    yield takeEvery(NEW_INSURANCE, create)
}
export function* updateSaga() {
    yield takeEvery(UPDATE_INSURANCE, update)
}
export function* deleteSaga() {
    yield takeEvery(DELETE_INSURANCE, deleteItem)
}
export default function* rootSaga() {
    yield all([
        fork(fetchAllSaga),
        fork(createSaga),
        fork(updateSaga),
        fork(deleteSaga),
    ]);
}