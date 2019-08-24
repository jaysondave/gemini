import {
    DELETE_DOCUMENT,
    FETCH_ALL_DOCUMENT,
    GET_DOCUMENTS_SUCCESS,
    NEW_DOCUMENT,
    UPDATE_DOCUMENT,
} from "../constants/ActionTypes";
export const createNewDocument = (body) => {
    return {
        type: NEW_DOCUMENT,
        payload: body
    };
};

export const fetchDocuments = (id) => {
    return {
        type: FETCH_ALL_DOCUMENT,
        payload: id
    }
};

export const fetchDocumentsSuccess = (systems) => {
    return {
        type: GET_DOCUMENTS_SUCCESS,
        payload: systems
    }
};
export const updateDocument = (id, body) => {
    return {
        type: UPDATE_DOCUMENT,
        payload: {id, body}
    }
};
export const deleteDocument = (id) => {
    return {
        type: DELETE_DOCUMENT,
        payload: id
    }
};