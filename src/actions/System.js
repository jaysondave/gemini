import {
    DELETE_SYSTEM,
    FETCH_ALL_SYSTEM,
    GET_SYSTEMS_SUCCESS,
    NEW_SYSTEM,
    UPDATE_SYSTEM
} from "../constants/ActionTypes";
export const createNewSystem = (body) => {
    return {
        type: NEW_SYSTEM,
        payload: body
    };
};

export const fetchSystems = (id) => {
    return {
        type: FETCH_ALL_SYSTEM,
        payload: id
    }
};

export const fetchSystemsSuccess = (systems) => {
    return {
        type: GET_SYSTEMS_SUCCESS,
        payload: systems
    }
};
export const updateSystem = (id, body) => {
    return {
        type: UPDATE_SYSTEM,
        payload: {id, body}
    }
};
export const deleteSystem = (id) => {
    return {
        type: DELETE_SYSTEM,
        payload: id
    }
};