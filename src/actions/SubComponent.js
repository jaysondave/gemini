import {
    GET_SUB_COMPONENT_SUCCESS,
    GET_SUB_COMPONENT_START,
    GET_SUB_COMPONENT_FAILURE,
    CREATE_SUB_COMPONENT,
    UPDATE_SUB_COMPONENT,
    DELETE_SUB_COMPONENT
} from '../constants/ActionTypes';

export const fetchSubComponents = () => {
    return {
        type: GET_SUB_COMPONENT_START,
    }
};

export const fetchSubComponentsSuccess = (payload) => {
    return {
        type: GET_SUB_COMPONENT_SUCCESS,
        payload: payload
    }
};
export const createNewSubComponent = (body) => {
    return {
        type: CREATE_SUB_COMPONENT,
        payload: body
    }
};
export const updateSelectedSubComponent = (id, body) => {
    return {
        type: UPDATE_SUB_COMPONENT,
        payload: {id, body}
    }
};
export const deleteSelectedSubComponent = (id) => {
    return {
        type: DELETE_SUB_COMPONENT,
        payload: id
    }
};

export const getSubComponentsFailure = () => {
    return {
        type: GET_SUB_COMPONENT_FAILURE
    };
};