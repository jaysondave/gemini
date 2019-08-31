import {
    DELETE_INSURANCE,
    FETCH_ALL_INSURANCE,
    GET_INSURANCES_SUCCESS,
    NEW_INSURANCE,
    UPDATE_INSURANCE
} from "../constants/ActionTypes";

export const createNewInsurance = (body) => {
    return {
        type: NEW_INSURANCE,
        payload: body
    };
};

export const fetchInsurances = (id) => {
    return {
        type: FETCH_ALL_INSURANCE,
        payload: id
    }
};

export const fetchInsurancesSuccess = (payload) => {
    return {
        type: GET_INSURANCES_SUCCESS,
        payload: payload
    }
};
export const updateInsurance = (id, body) => {
    return {
        type: UPDATE_INSURANCE,
        payload: {id, body}
    }
};
export const deleteInsurance = (id) => {
    return {
        type: DELETE_INSURANCE,
        payload: id
    }
};