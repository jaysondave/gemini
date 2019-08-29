import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    showMessage,
    hideLoader,
    userSignOut, fetchCadastralKindsSuccess, fetchCadastralKinds,
} from "../actions";
import {
    CREATE_CADASTRAL_KIND,
    DELETE_CADASTRAL_KIND,
    GET_CADASTRAL_KIND_START,
    UPDATE_CADASTRAL_KIND
} from "../constants/ActionTypes";
import { CadastralKindAPI } from "../apis";

const cadastralKindAPI = new CadastralKindAPI();
const fetchAllRequest = async () =>
    await  cadastralKindAPI.fetchAll()
        .then(resp => resp)
        .catch(error => error);
const createRequest = async (body) =>
    await  cadastralKindAPI.createItem(body)
        .then(resp => resp)
        .catch(error => error);
const updateRequest = async (payload) =>
    await  cadastralKindAPI.updateItem(payload.id, payload.body)
        .then(resp => resp)
        .catch(error => error);
const deleteRequest = async (payload) =>
    await  cadastralKindAPI.deleteItem(payload)
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
            yield put(fetchCadastralKindsSuccess(res.data.cadastral_kinds));
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
            yield put(fetchCadastralKinds());
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
            yield put(fetchCadastralKinds());
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
            yield put(fetchCadastralKinds());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}

export function* fetchAllSaga() {
    yield takeEvery(GET_CADASTRAL_KIND_START, fetchAll);
}
export function* createSaga() {
    yield takeEvery(CREATE_CADASTRAL_KIND, create)
}
export function* updateSaga() {
    yield takeEvery(UPDATE_CADASTRAL_KIND, update)
}
export function* deleteSaga() {
    yield takeEvery(DELETE_CADASTRAL_KIND, deleteItem)
}
export default function* rootSaga() {
    yield all([
        fork(fetchAllSaga),
        fork(createSaga),
        fork(updateSaga),
        fork(deleteSaga),
    ]);
}