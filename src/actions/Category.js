import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_START,
    GET_CATEGORIES_FAILURE,
    CREATE_NEW_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
} from '../constants/ActionTypes';

export const fetchCategories = () => {
    return {
        type: GET_CATEGORIES_START,
    }
};

export const fetchCategoriesSuccess = (authUser) => {
    return {
        type: GET_CATEGORIES_SUCCESS,
        payload: authUser
    }
};
export const createNewCategory = (body) => {
    return {
        type: CREATE_NEW_CATEGORY,
        payload: body
    }
};
export const updateSelectedCategory = (id, body) => {
    return {
        type: UPDATE_CATEGORY,
        payload: {id, body}
    }
};
export const deleteSelectedCategory = (id) => {
    return {
        type: DELETE_CATEGORY,
        payload: id
    }
};

export const getCategoriesFailure = () => {
    return {
        type: GET_CATEGORIES_FAILURE
    };
};