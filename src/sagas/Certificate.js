import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    showMessage,
    hideLoader,
    userSignOut,
    fetchFloorsSuccess,
    fetchFloors,
    fetchSystemsSuccess,
    fetchSystems,
    fetchDocumentsSuccess,
    fetchDocuments,
    fetchCertificatesSuccess, fetchCertificates
} from "../actions";
import {
    DELETE_CERTIFICATE,
    DELETE_DOCUMENT,
    DELETE_FLOOR, DELETE_SYSTEM, FETCH_ALL_CERTIFICATE, FETCH_ALL_DOCUMENT,
    FETCH_ALL_FLOOR, FETCH_ALL_SYSTEM, NEW_CERTIFICATE, NEW_DOCUMENT,
    NEW_FLOOR, NEW_SYSTEM, UPDATE_CERTIFICATE, UPDATE_DOCUMENT,
    UPDATE_FLOOR, UPDATE_SYSTEM,
} from "../constants/ActionTypes";
import {CertificateAPI, DocumentAPI, FloorAPI} from "../apis";
import {SystemAPI} from "../apis/system";

const certificateAPI = new CertificateAPI();
const fetchAllRequest = async (payload) =>
    await  certificateAPI.fetchAll(payload)
        .then(resp => resp)
        .catch(error => error);
const createRequest = async (body) =>
    await  certificateAPI.register(body)
        .then(resp => resp)
        .catch(error => error);
const updateRequest = async (payload) =>
    await  certificateAPI.updateItem(payload.id, payload.body)
        .then(resp => resp)
        .catch(error => error);
const deleteRequest = async (payload) =>
    await  certificateAPI.deleteItem(payload)
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
            yield put(fetchCertificatesSuccess(res.data.certificates));
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
            yield put(fetchCertificates(res.data.certificate.body_id));
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
            yield put(fetchCertificates(res.data.certificate.body_id));
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
            yield put(fetchCertificates());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
export function* fetchAllSaga() {
    yield takeEvery(FETCH_ALL_CERTIFICATE, fetchAll);
}
export function* createSaga() {
    yield takeEvery(NEW_CERTIFICATE, create)
}
export function* updateSaga() {
    yield takeEvery(UPDATE_CERTIFICATE, update)
}
export function* deleteSaga() {
    yield takeEvery(DELETE_CERTIFICATE, deleteItem)
}
export default function* rootSaga() {
    yield all([
        fork(fetchAllSaga),
        fork(createSaga),
        fork(updateSaga),
        fork(deleteSaga),
    ]);
}