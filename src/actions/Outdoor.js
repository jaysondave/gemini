import {
    DELETE_OUTDOOR,
    FETCH_ALL_OUTDOOR,
    GET_OUTDOOR_SUCCESS,
    NEW_OUTDOOR,
    UPDATE_OUTDOOR
} from "../constants/ActionTypes";

export const createNewOutdoor = (body) => {
    return {
        type: NEW_OUTDOOR,
        payload: body
    };
};

export const fetchOutdoors = (id) => {
    return {
        type: FETCH_ALL_OUTDOOR,
        payload: id
    }
};

export const fetchOutdoorsSuccess = (bodies) => {
    return {
        type: GET_OUTDOOR_SUCCESS,
        payload: bodies
    }
};
export const updateOutdoor = (id, body) => {
    return {
        type: UPDATE_OUTDOOR,
        payload: {id, body}
    }
};
export const deleteOutdoor = (id) => {
    return {
        type: DELETE_OUTDOOR,
        payload: id
    }
};