import {
    CREATE_CADASTRAL_KIND,
    DELETE_CADASTRAL_KIND,
    GET_CADASTRAL_KIND_FAILURE,
    GET_CADASTRAL_KIND_START,
    GET_CADASTRAL_KIND_SUCCESS,
    UPDATE_CADASTRAL_KIND
} from "../constants/ActionTypes";

export const fetchCadastralKinds = () => {
    return {
        type: GET_CADASTRAL_KIND_START,
    }
};

export const fetchCadastralKindsSuccess = (payload) => {
    return {
        type: GET_CADASTRAL_KIND_SUCCESS,
        payload: payload
    }
};
export const createNewCadastralKind = (body) => {
    return {
        type: CREATE_CADASTRAL_KIND,
        payload: body
    }
};
export const updateSelectedCadastralKind = (id, body) => {
    return {
        type: UPDATE_CADASTRAL_KIND,
        payload: {id, body}
    }
};
export const deleteSelectedCadastralKind = (id) => {
    return {
        type: DELETE_CADASTRAL_KIND,
        payload: id
    }
};

export const getCadastralKindsFailure = () => {
    return {
        type: GET_CADASTRAL_KIND_FAILURE
    };
};