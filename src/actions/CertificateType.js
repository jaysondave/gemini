import {
    CREATE_CERTIFICATE_TYPE,
    DELETE_CERTIFICATE_TYPE,
    GET_CERTIFICATE_TYPE_FAILURE,
    GET_CERTIFICATE_TYPE_START,
    GET_CERTIFICATE_TYPE_SUCCESS,
    UPDATE_CERTIFICATE_TYPE,
} from "../constants/ActionTypes";

export const fetchCertificateTypes = () => {
    return {
        type: GET_CERTIFICATE_TYPE_START,
    }
};

export const fetchDCertificateTypesSuccess = (payload) => {
    return {
        type: GET_CERTIFICATE_TYPE_SUCCESS,
        payload: payload
    }
};
export const createNewCertificateType = (body) => {
    return {
        type: CREATE_CERTIFICATE_TYPE,
        payload: body
    }
};
export const updateSelectedCertificateType = (id, body) => {
    return {
        type: UPDATE_CERTIFICATE_TYPE,
        payload: {id, body}
    }
};
export const deleteSelectedCertificateType = (id) => {
    return {
        type: DELETE_CERTIFICATE_TYPE,
        payload: id
    }
};

export const getCertificateTypesFailure = () => {
    return {
        type: GET_CERTIFICATE_TYPE_FAILURE
    };
};