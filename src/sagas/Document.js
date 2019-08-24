import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    showMessage,
    hideLoader,
    userSignOut,
    fetchFloorsSuccess, fetchFloors, fetchSystemsSuccess, fetchSystems, fetchDocumentsSuccess, fetchDocuments
} from "../actions";
import {
    DELETE_DOCUMENT,
    DELETE_FLOOR, DELETE_SYSTEM, FETCH_ALL_DOCUMENT,
    FETCH_ALL_FLOOR, FETCH_ALL_SYSTEM, NEW_DOCUMENT,
    NEW_FLOOR, NEW_SYSTEM, UPDATE_DOCUMENT,
    UPDATE_FLOOR, UPDATE_SYSTEM,
} from "../constants/ActionTypes";
import {DocumentAPI, FloorAPI} from "../apis";
import {SystemAPI} from "../apis/system";

const documentAPI = new DocumentAPI();
const fetchAllRequest = async (payload) =>
    await  documentAPI.fetchAll(payload)
        .then(resp => resp)
        .catch(error => error);
const createRequest = async (body) =>
    await  documentAPI.register(body)
        .then(resp => resp)
        .catch(error => error);
const updateRequest = async (payload) =>
    await  documentAPI.updateItem(payload.id, payload.body)
        .then(resp => resp)
        .catch(error => error);
const deleteRequest = async (payload) =>
    await  documentAPI.deleteItem(payload)
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
            yield put(fetchDocumentsSuccess(res.data.documents));
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
            yield put(fetchDocuments(res.data.document.body_id));
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
            yield put(fetchDocuments(res.data.document.body_id));
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
            yield put(fetchDocuments());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
export function* fetchAllSaga() {
    yield takeEvery(FETCH_ALL_DOCUMENT, fetchAll);
}
export function* createSaga() {
    yield takeEvery(NEW_DOCUMENT, create)
}
export function* updateSaga() {
    yield takeEvery(UPDATE_DOCUMENT, update)
}
export function* deleteSaga() {
    yield takeEvery(DELETE_DOCUMENT, deleteItem)
}
export default function* rootSaga() {
    yield all([
        fork(fetchAllSaga),
        fork(createSaga),
        fork(updateSaga),
        fork(deleteSaga),
    ]);
}