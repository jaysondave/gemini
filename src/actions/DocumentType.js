import {
    CREATE_DOCUMENT_TYPE,
    DELETE_DOCUMENT_TYPE,
    GET_DOCUMENT_TYPE_FAILURE,
    GET_DOCUMENT_TYPE_START,
    GET_DOCUMENT_TYPE_SUCCESS,
    UPDATE_DOCUMENT_TYPE
} from "../constants/ActionTypes";

export const fetchDocumentTypes = () => {
    return {
        type: GET_DOCUMENT_TYPE_START,
    }
};

export const fetchDocumentTypesSuccess = (payload) => {
    return {
        type: GET_DOCUMENT_TYPE_SUCCESS,
        payload: payload
    }
};
export const createNewDocumentType = (body) => {
    return {
        type: CREATE_DOCUMENT_TYPE,
        payload: body
    }
};
export const updateSelectedDocumentType = (id, body) => {
    return {
        type: UPDATE_DOCUMENT_TYPE,
        payload: {id, body}
    }
};
export const deleteSelectedDocumentType = (id) => {
    return {
        type: DELETE_DOCUMENT_TYPE,
        payload: id
    }
};

export const getDocumentTypesFailure = () => {
    return {
        type: GET_DOCUMENT_TYPE_FAILURE
    };
};