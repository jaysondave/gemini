import {
    DELETE_CLAIM,
    FETCH_ALL_CLAIM,
    GET_CLAIMS_SUCCESS,
    NEW_CLAIM,
    UPDATE_CLAIM,
} from "../constants/ActionTypes";

export const createNewClaim = (body) => {
    return {
        type: NEW_CLAIM,
        payload: body
    };
};

export const fetchClaims = (id) => {
    return {
        type: FETCH_ALL_CLAIM,
        payload: id
    }
};

export const fetchClaimsSuccess = (payload) => {
    return {
        type: GET_CLAIMS_SUCCESS,
        payload: payload
    }
};
export const updateClaim = (id, body) => {
    return {
        type: UPDATE_CLAIM,
        payload: {id, body}
    }
};
export const deleteClaim = (id) => {
    return {
        type: DELETE_CLAIM,
        payload: id
    }
};