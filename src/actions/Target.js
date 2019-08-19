import {
    GET_TARGET_START,
    GET_TARGET_SUCCESS,
    CREATE_TARGET,
    UPDATE_TARGET,
    DELETE_TARGET,
    GET_TARGET_FAILURE
} from '../constants/ActionTypes';

export const fetchTargets = () => {
    return {
        type: GET_TARGET_START,
    }
};

export const fetchTargetsSuccess = (payload) => {
    return {
        type: GET_TARGET_SUCCESS,
        payload: payload
    }
};
export const createNewTarget = (body) => {
    return {
        type: CREATE_TARGET,
        payload: body
    }
};
export const updateSelectedTarget = (id, body) => {
    return {
        type: UPDATE_TARGET,
        payload: {id, body}
    }
};
export const deleteSelectedTarget = (id) => {
    return {
        type: DELETE_TARGET,
        payload: id
    }
};

export const getComponentsFailure = () => {
    return {
        type: GET_TARGET_FAILURE
    };
};