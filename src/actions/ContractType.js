import {
    CREATE_CONTRACT_TYPE, DELETE_CONTRACT_TYPE, GET_CONTRACT_TYPE_FAILURE,
    GET_CONTRACT_TYPE_START, GET_CONTRACT_TYPE_SUCCESS, UPDATE_CONTRACT_TYPE
} from '../constants/ActionTypes';

export const fetchContractTypes = () => {
    return {
        type: GET_CONTRACT_TYPE_START,
    }
};

export const fetchContractTypesSuccess = (payload) => {
    return {
        type: GET_CONTRACT_TYPE_SUCCESS,
        payload: payload
    }
};
export const createNewContractType = (body) => {
    return {
        type: CREATE_CONTRACT_TYPE,
        payload: body
    }
};
export const updateSelectedContractType = (id, body) => {
    return {
        type: UPDATE_CONTRACT_TYPE,
        payload: {id, body}
    }
};
export const deleteSelectedContractType = (id) => {
    return {
        type: DELETE_CONTRACT_TYPE,
        payload: id
    }
};

export const getContractTypesFailure = () => {
    return {
        type: GET_CONTRACT_TYPE_FAILURE
    };
};