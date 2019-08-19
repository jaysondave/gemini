import {
    DELETE_FLOOR,
    FETCH_ALL_FLOOR,
    GET_FLOORS_SUCCESS,
    NEW_FLOOR,
    UPDATE_FLOOR
} from "../constants/ActionTypes";
export const createNewFloor = (body) => {
    return {
        type: NEW_FLOOR,
        payload: body
    };
};

export const fetchFloors = (id) => {
    return {
        type: FETCH_ALL_FLOOR,
        payload: id
    }
};

export const fetchFloorsSuccess = (bodies) => {
    return {
        type: GET_FLOORS_SUCCESS,
        payload: bodies
    }
};
export const updateFloor = (id, body) => {
    return {
        type: UPDATE_FLOOR,
        payload: {id, body}
    }
};
export const deleteFloor = (id) => {
    return {
        type: DELETE_FLOOR,
        payload: id
    }
};