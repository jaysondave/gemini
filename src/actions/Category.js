import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_START,
    GET_CATEGORIES_FAILURE
} from 'constants/ActionTypes';

export const getCategoriesStart = () => {
    return {
        type: GET_CATEGORIES_START
    };
};

export const getCategoriesSuccess = (authUser) => {
    return {
        type: GET_CATEGORIES_SUCCESS,
        payload: authUser
    }
};

export const getCategoriesFailure = () => {
    return {
        type: GET_CATEGORIES_FAILURE
    };
};