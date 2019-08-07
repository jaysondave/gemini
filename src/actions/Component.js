import {
    GET_COMPONENT_SUCCESS,
    GET_COMPONENT_START,
    GET_COMPONENT_FAILURE,
    CREATE_COMPONENT,
    UPDATE_COMPONENT,
    DELETE_COMPONENT
} from '../constants/ActionTypes';

export const fetchComponents = () => {
    return {
        type: GET_COMPONENT_START,
    }
};

export const fetchComponentsSuccess = (payload) => {
    return {
        type: GET_COMPONENT_SUCCESS,
        payload: payload
    }
};
export const createNewComponent = (body) => {
    return {
        type: CREATE_COMPONENT,
        payload: body
    }
};
export const updateSelectedComponent = (id, body) => {
    return {
        type: UPDATE_COMPONENT,
        payload: {id, body}
    }
};
export const deleteSelectedComponent = (id) => {
    return {
        type: DELETE_COMPONENT,
        payload: id
    }
};

export const getComponentsFailure = () => {
    return {
        type: GET_COMPONENT_FAILURE
    };
};