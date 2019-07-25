import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    REGISTER_USER,
    FETCH_ALL_USER
} from "../constants/ActionTypes";
import {showMessage, hideLoader, showLoader} from "../actions/Alert";
import {userSignOut} from "../actions/Auth";
import UserAPI from "../apis/user";
import {fetchUsersSuccess} from "../actions";

const userAPI = new UserAPI();
const fetchAllUserRequest = async () =>
    await  userAPI.fetchAllUser()
        .then(resp => resp)
        .catch(error => error);
const createNewUserRequest = async (user) =>
    await  userAPI.register(user)
        .then(resp => resp)
        .catch(error => error);

function* fetchAllUser() {
    try {
        const users = yield call(fetchAllUserRequest);
        yield put(hideLoader());
        console.log({users});
        if (users.status !== 200) {
            switch (users.response.status) {
                case 401:
                    yield put(showMessage(category['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(category.message));
                    return
            }
        } else {
            yield put(fetchUsersSuccess(users));
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
            switch (register.response.status) {
                case 401:
                    yield put(showMessage(category['response']['data']['errors'][0]));
                    yield put(userSignOut());
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(category.message));
                    return
            }
        } else {
            yield put(fetchAllUser());
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