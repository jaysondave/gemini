import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    GET_DOCUMENT_TYPE_START,
    CREATE_DOCUMENT_TYPE,
    UPDATE_DOCUMENT_TYPE,
    DELETE_DOCUMENT_TYPE,
    GET_CERTIFICATE_TYPE_START,
    CREATE_CERTIFICATE_TYPE,
    UPDATE_CERTIFICATE_TYPE,
    DELETE_CERTIFICATE_TYPE
} from "../constants/ActionTypes";
import {
    showMessage,
    hideLoader,
    userSignOut,
    fetchDocumentTypesSuccess,
    fetchDocumentTypes, fetchCertificateTypes, fetchDCertificateTypesSuccess
} from "../actions";
import {CertificateTypeAPI} from "../apis";

const certificateTypeAPI = new CertificateTypeAPI();
const fetchAllRequest = async () =>
    await  certificateTypeAPI.fetchAll()
        .then(resp => resp)
        .catch(error => error);
const createRequest = async (body) =>
    await  certificateTypeAPI.createItem(body)
        .then(resp => resp)
        .catch(error => error);
const updateRequest = async (payload) =>
    await  certificateTypeAPI.updateItem(payload.id, payload.body)
        .then(resp => resp)
        .catch(error => error);
const deleteRequest = async (payload) =>
    await  certificateTypeAPI.deleteItem(payload)
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
            yield put(fetchDCertificateTypesSuccess(res.data.certificate_types));
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
            yield put(fetchCertificateTypes());
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
            yield put(fetchCertificateTypes());
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
            yield put(fetchCertificateTypes());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}

export function* fetchAllSaga() {
    yield takeEvery(GET_CERTIFICATE_TYPE_START, fetchAll);
}
export function* createSaga() {
    yield takeEvery(CREATE_CERTIFICATE_TYPE, create)
}
export function* updateSaga() {
    yield takeEvery(UPDATE_CERTIFICATE_TYPE, update)
}
export function* deleteSaga() {
    yield takeEvery(DELETE_CERTIFICATE_TYPE, deleteItem)
}
export default function* rootSaga() {
    yield all([
        fork(fetchAllSaga),
        fork(createSaga),
        fork(updateSaga),
        fork(deleteSaga),
    ]);
}