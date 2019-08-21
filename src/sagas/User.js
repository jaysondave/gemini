import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    REGISTER_USER,
    FETCH_ALL_USER
} from "../constants/ActionTypes";
import {showMessage, hideLoader, userSignOut, fetchUsers, fetchUsersSuccess } from "../actions";
import {UserAPI} from "../apis/user";

const userAPI = new UserAPI();
const fetchAllUserRequest = async () =>
    await  userAPI.fetchAllUser()
        .then(resp => resp)
        .catch(error => error);
const createNewUserRequest = async (user) =>
    await  userAPI.register(user)
        .then(resp => resp)
        .catch(error => error);


function* showErrorMessage(message) {
    yield put(showMessage(message));
}
function* fetchAllUser() {
    try {
        const users = yield call(fetchAllUserRequest);
        yield put(hideLoader());
        console.log({users});
        if (users.status !== 200) {
            switch (users.response.status) {
                case 401:
                    yield put(showMessage(users['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                case 400:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(users.message));
                    return
            }
        } else {
            yield put(fetchUsersSuccess(users.data));
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
function* registerNewUser({payload}) {
    try {
        const register = yield call(createNewUserRequest, payload);
        yield put(hideLoader());
        console.log({register});
        if (register.status !== 200) {
            const errorResp = register.response.data.errors;
            switch (register.response.status) {
                case 401:
                    yield put(showMessage(register['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                case 400:
                    let errors = [];
                    Object.entries(errorResp).map(([key,value]) => {
                        errors.push(key + " " + value);
                    });
                    yield put(showMessage(errors[0]));
                    return;
                default:
                    yield put(showMessage(register.message));
                    return;
            }
        } else {
            yield put(fetchUsers());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}

export function* fetchAlluserSaga() {
    yield takeEvery(FETCH_ALL_USER, fetchAllUser);
}
export function* registerNewUserSaga() {
    yield takeEvery(REGISTER_USER, registerNewUser)
}
export default function* rootSaga() {
    yield all([
        fork(fetchAlluserSaga),
        fork(registerNewUserSaga),
    ]);
}