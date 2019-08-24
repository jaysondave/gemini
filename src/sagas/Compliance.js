import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    GET_TARGET_START,
    CREATE_TARGET,
    UPDATE_TARGET,
    DELETE_TARGET, GET_COMPLIANCE_START, CREATE_COMPLIANCE, UPDATE_COMPLIANCE, DELETE_COMPLIANCE
} from "../constants/ActionTypes";
import {
    showMessage,
    hideLoader,
    userSignOut,
    fetchTargetsSuccess, fetchTargets, fetchCompliancesSuccess, fetchCompliances
} from "../actions";
import {ComplianceAPI, TargetAPI} from "../apis";

const complianceAPI = new ComplianceAPI();
const fetchAllRequest = async () =>
    await  complianceAPI.fetchAll()
        .then(resp => resp)
        .catch(error => error);
const createRequest = async (body) =>
    await  complianceAPI.createItem(body)
        .then(resp => resp)
        .catch(error => error);
const updateRequest = async (payload) =>
    await  complianceAPI.updateItem(payload.id, payload.body)
        .then(resp => resp)
        .catch(error => error);
const deleteRequest = async (payload) =>
    await  complianceAPI.deleteItem(payload)
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
            yield put(fetchCompliancesSuccess(res.data.compliances));
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
            yield put(fetchCompliances());
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
            yield put(fetchCompliances());
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
            yield put(fetchCompliances());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}

export function* fetchAllSaga() {
    yield takeEvery(GET_COMPLIANCE_START, fetchAll);
}
export function* createSaga() {
    yield takeEvery(CREATE_COMPLIANCE, create)
}
export function* updateSaga() {
    yield takeEvery(UPDATE_COMPLIANCE, update)
}
export function* deleteSaga() {
    yield takeEvery(DELETE_COMPLIANCE, deleteItem)
}
export default function* rootSaga() {
    yield all([
        fork(fetchAllSaga),
        fork(createSaga),
        fork(updateSaga),
        fork(deleteSaga),
    ]);
}