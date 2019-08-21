import {
    CREATE_PAYMENT_FREQUENCY, DELETE_PAYMENT_FREQUENCY, GET_PAYMENT_FREQUENCY_FAILURE,
    GET_PAYMENT_FREQUENCY_START,
    GET_PAYMENT_FREQUENCY_SUCCESS, UPDATE_PAYMENT_FREQUENCY
} from "../constants/ActionTypes";

export const fetchPaymentFrequencies = () => {
    return {
        type: GET_PAYMENT_FREQUENCY_START,
    }
};

export const fetchPaymentFrequenciesSuccess = (payload) => {
    return {
        type: GET_PAYMENT_FREQUENCY_SUCCESS,
        payload: payload
    }
};
export const createNewPaymentFrequency = (body) => {
    return {
        type: CREATE_PAYMENT_FREQUENCY,
        payload: body
    }
};
export const updateSelectedPaymentFrequency = (id, body) => {
    return {
        type: UPDATE_PAYMENT_FREQUENCY,
        payload: {id, body}
    }
};
export const deleteSelectedPaymentFrequency = (id) => {
    return {
        type: DELETE_PAYMENT_FREQUENCY,
        payload: id
    }
};

export const getPaymentFrequencies = () => {
    return {
        type: GET_PAYMENT_FREQUENCY_FAILURE
    };
};