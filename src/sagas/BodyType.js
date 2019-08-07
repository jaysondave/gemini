import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    GET_BODY_TYPE_START,
    CREATE_BODY_TYPE,
    UPDATE_BODY_TYPE,
    DELETE_BODY_TYPE
} from "../constants/ActionTypes";
import {
    showMessage,
    hideLoader,
    userSignOut,
    fetchBodyTypesSuccess,
    fetchBodyTypes
} from "../actions";
import BodyTypeAPI from "../apis/bodyType";

const bodyTypeAPI = new BodyTypeAPI();
const fetchAllBodyTypesRequest = async () =>
    await  bodyTypeAPI.fetchAllBodyTypes()
        .then(resp => resp)
        .catch(error => error);
const createNewBodyTypeRequest = async (body) =>
    await  bodyTypeAPI.createBodyType(body)
        .then(resp => resp)
        .catch(error => error);
const updateBodyTypeRequest = async (payload) =>
    await  bodyTypeAPI.updateBodyType(payload.id, payload.body)
        .then(resp => resp)
        .catch(error => error);
const deleteBodyTypeRequest = async (payload) =>
    await  bodyTypeAPI.deleteBodyType(payload)
        .then(resp => resp)
        .catch(error => error);

function* fetchAllBodyType() {
    try {
        const body_type = yield call(fetchAllBodyTypesRequest);
        yield put(hideLoader());
        console.log({body_type});
        if (body_type.status !== 200) {
            switch (body_type.response.status) {
                case 401:
                    yield put(showMessage(body_type['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(body_type.message));
                    return
            }
        } else {
            yield put(fetchBodyTypesSuccess(body_type.data.body_types));
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
function* createBodyType({payload}) {
    try {
        const body_type = yield call(createNewBodyTypeRequest, payload);
        yield put(hideLoader());
        console.log({body_type});
        if (body_type.status !== 200) {
            switch (body_type.response.status) {
                case 401:
                    yield put(showMessage(body_type['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(body_type.message));
                    return
            }
        } else {
            yield put(fetchBodyTypes());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
function* updateSelectedBodyType({payload}) {
    try {
        const body_type = yield call(updateBodyTypeRequest, payload);
        yield put(hideLoader());
        console.log({body_type});
        if (body_type.status !== 200) {
            switch (body_type.response.status) {
                case 401:
                    yield put(showMessage(body_type['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(body_type.message));
                    return
            }
        } else {
            yield put(fetchBodyTypes());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
function* deleteSelectedBodyType({payload}) {
    try {
        const body_type = yield call(deleteBodyTypeRequest, payload);
        yield put(hideLoader());
        console.log({deleteSelectedBuildingType: body_type});
        if (body_type.status !== 200) {
            switch (body_type.response.status) {
                case 401:
                    yield put(showMessage(body_type['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(body_type.message));
                    return
            }
        } else {
            yield put(fetchBodyTypes());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}

export function* fetchAllBodyTypeSaga() {
    yield takeEvery(GET_BODY_TYPE_START, fetchAllBodyType);
}
export function* createNewBodyTypeSaga() {
    yield takeEvery(CREATE_BODY_TYPE, createBodyType)
}
export function* updateBodyTypeSaga() {
    yield takeEvery(UPDATE_BODY_TYPE, updateSelectedBodyType)
}
export function* deleteBodyTypeSaga() {
    yield takeEvery(DELETE_BODY_TYPE, deleteSelectedBodyType)
}
export default function* rootSaga() {
    yield all([
        fork(fetchAllBodyTypeSaga),
        fork(createNewBodyTypeSaga),
        fork(updateBodyTypeSaga),
        fork(deleteBodyTypeSaga),
    ]);
}