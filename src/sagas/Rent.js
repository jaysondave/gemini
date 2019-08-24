import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    showMessage,
    hideLoader,
    userSignOut,
    fetchRentsSuccess, fetchRents
} from "../actions";
import {
    DELETE_RENT,
    FETCH_ALL_RENT,
    NEW_RENT,
    UPDATE_RENT,
} from "../constants/ActionTypes";
import {RentAPI} from "../apis";

const rentAPI = new RentAPI();
const fetchAllRequest = async (payload) =>
    await  rentAPI.fetchAll(payload)
        .then(resp => resp)
        .catch(error => error);
const createRequest = async (body) =>
    await  rentAPI.register(body)
        .then(resp => resp)
        .catch(error => error);
const updateRequest = async (payload) =>
    await  rentAPI.updateItem(payload.id, payload.body)
        .then(resp => resp)
        .catch(error => error);
const deleteRequest = async (payload) =>
    await  rentAPI.deleteItem(payload)
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
            yield put(fetchRentsSuccess(res.data.rents));
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
            yield put(fetchRents(res.data.rent.body_id));
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
            yield put(fetchRents(res.data.rent.body_id));
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
            yield put(fetchRents());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
export function* fetchAllSaga() {
    yield takeEvery(FETCH_ALL_RENT, fetchAll);
}
export function* createSaga() {
    yield takeEvery(NEW_RENT, create)
}
export function* updateSaga() {
    yield takeEvery(UPDATE_RENT, update)
}
export function* deleteSaga() {
    yield takeEvery(DELETE_RENT, deleteItem)
}
export default function* rootSaga() {
    yield all([
        fork(fetchAllSaga),
        fork(createSaga),
        fork(updateSaga),
        fork(deleteSaga),
    ]);
}