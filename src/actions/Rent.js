import {DELETE_RENT, FETCH_ALL_RENT, GET_RENTS_SUCCESS, NEW_RENT, UPDATE_RENT} from "../constants/ActionTypes";

export const createNewRent = (body) => {
    return {
        type: NEW_RENT,
        payload: body
    };
};

export const fetchRents = (id) => {
    return {
        type: FETCH_ALL_RENT,
        payload: id
    }
};

export const fetchRentsSuccess = (rents) => {
    return {
        type: GET_RENTS_SUCCESS,
        payload: rents
    }
};
export const updateRent = (id, body) => {
    return {
        type: UPDATE_RENT,
        payload: {id, body}
    }
};
export const deleteRent = (id) => {
    return {
        type: DELETE_RENT,
        payload: id
    }
};