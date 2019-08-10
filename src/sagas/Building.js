import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    NEW_BUILDING,
    FETCH_ALL_BUILDING,
    UPDATE_BUILDING,
    DELETE_BUILDING
} from '../constants/ActionTypes';
import {
    showMessage,
    hideLoader,
    userSignOut,
    fetchBuildingsSuccess,
    fetchBuildings
} from "../actions";
import BuildingAPI from "../apis/building";

const buildingAPI = new BuildingAPI();
const fetchAllRequest = async () =>
    await  buildingAPI.fetchAll()
        .then(resp => resp)
        .catch(error => error);
const createRequest = async (body) =>
    await  buildingAPI.register(body)
        .then(resp => resp)
        .catch(error => error);
const updateRequest = async (payload) =>
    await  buildingAPI.updateItem(payload.id, payload.body)
        .then(resp => resp)
        .catch(error => error);
const deleteRequest = async (payload) =>
    await  buildingAPI.deleteItem(payload)
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
            yield put(fetchBuildingsSuccess(res.data.buildings));
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
            yield put(fetchBuildings());
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
            yield put(fetchBuildings());
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
            yield put(fetchBuildings());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
export function* fetchAllSaga() {
    yield takeEvery(FETCH_ALL_BUILDING, fetchAll);
}
export function* createSaga() {
    yield takeEvery(NEW_BUILDING, create)
}
export function* updateSaga() {
    yield takeEvery(UPDATE_BUILDING, update)
}
export function* deleteSaga() {
    yield takeEvery(DELETE_BUILDING, deleteItem)
}
export default function* rootSaga() {
    yield all([
        fork(fetchAllSaga),
        fork(createSaga),
        fork(updateSaga),
        fork(deleteSaga),
    ]);
}