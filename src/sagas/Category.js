import {all, call, fork, put, takeEvery} from "redux-saga/effects";

import {
    GET_CATEGORIES_START,
    CREATE_NEW_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
} from "../constants/ActionTypes";
import { fetchCategories, fetchCategoriesSuccess } from "../actions/Category";
import {showMessage, hideLoader, showLoader} from "../actions/Alert";
import {userSignOut} from "../actions/Auth";
import CategoryAPI from "../apis/category";

const categoryApi = new CategoryAPI();
const fetchAllCategoriesRequest = async () =>
    await  categoryApi.fetchAllCategories()
        .then(resp => resp)
        .catch(error => error);
const createNewCategoryRequest = async (body) =>
    await  categoryApi.createCategory(body)
        .then(resp => resp)
        .catch(error => error);
const updateCategoryRequest = async (payload) =>
    await  categoryApi.updateCategory(payload.id, payload.body)
        .then(resp => resp)
        .catch(error => error);
const deleteCategoryRequest = async (payload) =>
    await  categoryApi.deleteCategory(payload)
        .then(resp => resp)
        .catch(error => error);

function* fetchAllCategory() {
    try {
        const category = yield call(fetchAllCategoriesRequest);
        yield put(hideLoader());
        console.log({category});
        if (category.status !== 200) {
            switch (category.response.status) {
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
            yield put(fetchCategoriesSuccess({category: category.data.categories}));
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
function* createNewCategory({payload}) {
    try {
        const category = yield call(createNewCategoryRequest, payload);
        yield put(hideLoader());
        console.log({category});
        if (category.status !== 200) {
            switch (category.response.status) {
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
            yield put(fetchCategories());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
function* updateSelectedCategory({payload}) {
    try {
        const category = yield call(updateCategoryRequest, payload);
        yield put(hideLoader());
        console.log({category});
        if (category.status !== 200) {
            switch (category.response.status) {
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
            yield put(fetchCategories());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}
function* deleteSelectedCategory({payload}) {
    try {
        const category = yield call(deleteCategoryRequest, payload);
        yield put(hideLoader());
        console.log({deleteSelectedCategory: category});
        if (category.status !== 200) {
            switch (category.response.status) {
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
            yield put(fetchCategories());
        }
    } catch (error) {
        yield put(showMessage(error));
    }
}

export function* fetchAllCategorySaga() {
    yield takeEvery(GET_CATEGORIES_START, fetchAllCategory);
}
export function* createNewCategorySaga() {
    yield takeEvery(CREATE_NEW_CATEGORY, createNewCategory)
}
export function* updateCategorySaga() {
    yield takeEvery(UPDATE_CATEGORY, updateSelectedCategory)
}
export function* deleteCategorySaga() {
    yield takeEvery(DELETE_CATEGORY, deleteSelectedCategory)
}
export default function* rootSaga() {
    yield all([
        fork(fetchAllCategorySaga),
        fork(createNewCategorySaga),
        fork(updateCategorySaga),
        fork(deleteCategorySaga),
    ]);
}