import {DELETE_BODY, FETCH_ALL_BODY, GET_BODIES_SUCCESS, NEW_BODY, UPDATE_BODY} from "../constants/ActionTypes";
export const createNewBody = (body) => {
    return {
        type: NEW_BODY,
        payload: body
    };
};

export const fetchBodies = () => {
    return {
        type: FETCH_ALL_BODY
    }
};

export const fetchBodiesSuccess = (bodies) => {
    return {
        type: GET_BODIES_SUCCESS,
        payload: bodies
    }
};
export const updateBody = (id, body) => {
    return {
        type: UPDATE_BODY,
        payload: {id, body}
    }
};
export const deleteBody = (id) => {
    return {
        type: DELETE_BODY,
        payload: id
    }
};