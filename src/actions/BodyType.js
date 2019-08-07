import {
    GET_BODY_TYPE_SUCCESS,
    GET_BODY_TYPE_START,
    GET_BODY_TYPE_FAILURE,
    CREATE_BODY_TYPE,
    UPDATE_BODY_TYPE,
    DELETE_BODY_TYPE
} from '../constants/ActionTypes';

export const fetchBodyTypes = () => {
    return {
        type: GET_BODY_TYPE_START,
    }
};

export const fetchBodyTypesSuccess = (type) => {
    return {
        type: GET_BODY_TYPE_SUCCESS,
        payload: type
    }
};
export const createNewBodyType = (body) => {
    return {
        type: CREATE_BODY_TYPE,
        payload: body
    }
};
export const updateSelectedBodyType = (id, body) => {
    return {
        type: UPDATE_BODY_TYPE,
        payload: {id, body}
    }
};
export const deleteSelectedBodyType = (id) => {
    return {
        type: DELETE_BODY_TYPE,
        payload: id
    }
};

export const getBodyTypesFailure = () => {
    return {
        type: GET_BODY_TYPE_FAILURE
    };
};