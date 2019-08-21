import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    GET_BUILDING_TYPE_START,
    CREATE_BUILDING_TYPE,
    UPDATE_BUILDING_TYPE,
    DELETE_BUILDING_TYPE
} from "../constants/ActionTypes";
import {showMessage, hideLoader } from "../actions/Alert";
import {userSignOut} from "../actions/Auth";
import {fetchBuildingTypes, fetchBuildingTypesSuccess} from "../actions";
import {BuildingTypeAPI} from "../apis";

const buildingTypeAPI = new BuildingTypeAPI();
const fetchAllBuildingTypesRequest = async () =>
    await  buildingTypeAPI.fetchAllBuildingTypes()
        .then(resp => resp)
        .catch(error => error);
const createNewBuildingTypeRequest = async (body) =>
    await  buildingTypeAPI.createBuildingType(body)
        .then(resp => resp)
        .catch(error => error);
const updateBuildingTypeRequest = async (payload) =>
    await  buildingTypeAPI.updateBuildingType(payload.id, payload.body)
        .then(resp => resp)
        .catch(error => error);
const deleteBuildingTypeRequest = async (payload) =>
    await  buildingTypeAPI.deleteBuildingType(payload)
        .then(resp => resp)
        .catch(error => error);

function* fetchAllBuildingType() {
    try {
        const building_type = yield call(fetchAllBuildingTypesRequest);
        yield put(hideLoader());
        console.log("=============================")
        console.log({building_type});
        if (building_type.status !== 200) {
            switch (building_type.response.status) {
                case 401:
                    yield put(showMessage(building_type['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(building_type.message));
                    return
            }
        } else {
            yield put(fetchBuildingTypesSuccess(building_type.data.building_types));
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
function* createBuildingType({payload}) {
    try {
        const building_type = yield call(createNewBuildingTypeRequest, payload);
        yield put(hideLoader());
        console.log({building_type});
        if (building_type.status !== 200) {
            switch (building_type.response.status) {
                case 401:
                    yield put(showMessage(building_type['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(building_type.message));
                    return
            }
        } else {
            yield put(fetchBuildingTypes());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
function* updateSelectedBuildingType({payload}) {
    try {
        const building_type = yield call(updateBuildingTypeRequest, payload);
        yield put(hideLoader());
        console.log({building_type});
        if (building_type.status !== 200) {
            switch (building_type.response.status) {
                case 401:
                    yield put(showMessage(building_type['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(building_type.message));
                    return
            }
        } else {
            yield put(fetchBuildingTypes());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
function* deleteSelectedBuildingType({payload}) {
    try {
        const building_type = yield call(deleteBuildingTypeRequest, payload);
        yield put(hideLoader());
        console.log({deleteSelectedCategory: building_type});
        if (building_type.status !== 200) {
            switch (building_type.response.status) {
                case 401:
                    yield put(showMessage(building_type['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(building_type.message));
                    return
            }
        } else {
            yield put(fetchBuildingTypes());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}

export function* fetchAllBuildingTypeSaga() {
    yield takeEvery(GET_BUILDING_TYPE_START, fetchAllBuildingType);
}
export function* createNewBuildingTypeSaga() {
    yield takeEvery(CREATE_BUILDING_TYPE, createBuildingType)
}
export function* updateBuildingTypeSaga() {
    yield takeEvery(UPDATE_BUILDING_TYPE, updateSelectedBuildingType)
}
export function* deleteBuildingTypeSaga() {
    yield takeEvery(DELETE_BUILDING_TYPE, deleteSelectedBuildingType)
}
export default function* rootSaga() {
    yield all([
        fork(fetchAllBuildingTypeSaga),
        fork(createNewBuildingTypeSaga),
        fork(updateBuildingTypeSaga),
        fork(deleteBuildingTypeSaga),
    ]);
}