import {
    DELETE_CADASTRAL,
    FETCH_ALL_CADASTRAL,
    GET_CADASTRALS_SUCCESS,
    NEW_CADASTRAL,
    UPDATE_CADASTRAL
} from "../constants/ActionTypes";

export const createNewCadastral = (body) => {
    return {
        type: NEW_CADASTRAL,
        payload: body
    };
};

export const fetchCadastrals = (id) => {
    return {
        type: FETCH_ALL_CADASTRAL,
        payload: id
    }
};

export const fetchCadastralsSuccess = (payload) => {
    return {
        type: GET_CADASTRALS_SUCCESS,
        payload: payload
    }
};
export const updateCadastral = (id, body) => {
    return {
        type: UPDATE_CADASTRAL,
        payload: {id, body}
    }
};
export const deleteCadastral = (id) => {
    return {
        type: DELETE_CADASTRAL,
        payload: id
    }
};