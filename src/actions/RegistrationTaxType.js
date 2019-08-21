
import {
    CREATE_REGISTRATION_TAX_TYPE, DELETE_REGISTRATION_TAX_TYPE, GET_REGISTRATION_TAX_TYPE_FAILURE,
    GET_REGISTRATION_TAX_TYPE_START,
    GET_REGISTRATION_TAX_TYPE_SUCCESS, UPDATE_REGISTRATION_TAX_TYPE
} from "../constants/ActionTypes";

export const fetchRegistrationTaxTypes = () => {
    return {
        type: GET_REGISTRATION_TAX_TYPE_START,
    }
};

export const fetchRegistrationTaxTypesSuccess = (payload) => {
    return {
        type: GET_REGISTRATION_TAX_TYPE_SUCCESS,
        payload: payload
    }
};
export const createNewContractType = (body) => {
    return {
        type: CREATE_REGISTRATION_TAX_TYPE,
        payload: body
    }
};
export const updateSelectedRegistrationTaxType = (id, body) => {
    return {
        type: UPDATE_REGISTRATION_TAX_TYPE,
        payload: {id, body}
    }
};
export const deleteSelectedRegistrationTaxType = (id) => {
    return {
        type: DELETE_REGISTRATION_TAX_TYPE,
        payload: id
    }
};

export const getRegistrationTaxTypesFailure = () => {
    return {
        type: GET_REGISTRATION_TAX_TYPE_FAILURE
    };
};