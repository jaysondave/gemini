import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
    SIGNIN_USER,
    SIGNOUT_USER,
    SIGNUP_USER
} from "../constants/ActionTypes";
import {userSignInSuccess, userSignOutSuccess, userSignUpSuccess} from "../actions/Auth";
import {showMessage, hideLoader} from "../actions/Alert";
import AuthAPI from "../apis/auth";
import {userHelper} from "../helpers";


const authApi = new AuthAPI();
const createUserWithEmailPasswordRequest = async (user) =>
    await  authApi.signUp(user)
        .then(authUser => authUser)
        .catch(error => error);

const signInUserWithEmailPasswordRequest = async (email, password) =>
    await  authApi.signIn({email, password})
        .then(authUser => authUser)
        .catch(error => error);

const signOutRequest = async () =>
    await  authApi.signOut()
        .then(authUser => authUser)
        .catch(error => error);

function* createUserWithEmailPassword({payload}) {
    const {user, isRemember} = payload;
    try {
        const signUpUser = yield call(createUserWithEmailPasswordRequest, user);
        console.log({signUpUser});
        if (signUpUser.status !== 200) {
            switch (signUpUser.response.status) {
                case 401:
                    yield put(showMessage(signUpUser['response']['data']['errors'][0]));
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(signUpUser.message));
                    return
            }
        } else {
            const headers = signUpUser.headers;
            const user = signUpUser.data.user;

            userHelper.setStorage({user, headers, isRemember});
            yield put(hideLoader());
            yield put(userSignUpSuccess({user}));
        }

    } catch (error) {
        yield put(showMessage(error));
    }
}

function* signInUserWithEmailPassword({payload}) {
    console.log(payload);
    const {email, password, isRemember} = payload;
    try {
        const signInUser = yield call(signInUserWithEmailPasswordRequest, email, password);
        yield put(hideLoader());
        console.log({signInUser});
        if (signInUser.status !== 200) {
            switch (signInUser.response.status) {
                case 401:
                    yield put(showMessage(signInUser['response']['data']['errors'][0]));
                    return;
                case 500:
                    yield put(showMessage('There is the problem in server. Please try later'));
                    return;
                default:
                    yield put(showMessage(signInUser.message));
                    return
            }
        } else {
            const headers = signInUser.headers;
            const user = signInUser.data.user;

            userHelper.setStorage({user, headers, isRemember});
            yield put(userSignInSuccess({user, headers, isRemember}));
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}

function* signOut() {
    try {
        const signOutResponse = yield call(signOutRequest);
        yield put(hideLoader());
        console.log({signOutResponse});
        if (signOutResponse.status !== 200) {
            yield put(showMessage(signOutResponse.message));
        } else {
            userHelper.emptyStorage();
            yield put(userSignOutSuccess());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}

export function* createUserAccount() {
    yield takeEvery(SIGNUP_USER, createUserWithEmailPassword);
}


export function* signInUser() {
    yield takeEvery(SIGNIN_USER, signInUserWithEmailPassword);
}

export function* signOutUser() {
    yield takeEvery(SIGNOUT_USER, signOut);
}

export default function* rootSaga() {
    yield all([
        fork(signInUser),
        fork(createUserAccount),
        fork(signOutUser)]);
}