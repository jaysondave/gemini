import {
    DELETE_CERTIFICATE,
    FETCH_ALL_CERTIFICATE,
    GET_CERTIFICATES_SUCCESS,
    NEW_CERTIFICATE,
    UPDATE_CERTIFICATE
} from "../constants/ActionTypes";

export const createNewCertificate = (body) => {
    return {
        type: NEW_CERTIFICATE,
        payload: body
    };
};

export const fetchCertificates = (id) => {
    return {
        type: FETCH_ALL_CERTIFICATE,
        payload: id
    }
};

export const fetchCertificatesSuccess = (payload) => {
    return {
        type: GET_CERTIFICATES_SUCCESS,
        payload: payload
    }
};
export const updateCertificate = (id, body) => {
    return {
        type: UPDATE_CERTIFICATE,
        payload: {id, body}
    }
};
export const deleteCertificate = (id) => {
    return {
        type: DELETE_CERTIFICATE,
        payload: id
    }
};