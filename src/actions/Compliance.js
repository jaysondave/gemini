import {
    CREATE_COMPLIANCE, DELETE_COMPLIANCE,
    GET_COMPLIANCE_START,
    GET_COMPLIANCE_SUCCESS, GET_SUB_COMPONENT_FAILURE, UPDATE_COMPLIANCE
} from "../constants/ActionTypes";

export const fetchCompliances = () => {
    return {
        type: GET_COMPLIANCE_START,
    }
};

export const fetchCompliancesSuccess = (payload) => {
    return {
        type: GET_COMPLIANCE_SUCCESS,
        payload: payload
    }
};
export const createNewCompliance = (body) => {
    return {
        type: CREATE_COMPLIANCE,
        payload: body
    }
};
export const updateSelectedCompliance = (id, body) => {
    return {
        type: UPDATE_COMPLIANCE,
        payload: {id, body}
    }
};
export const deleteSelectedCompliance = (id) => {
    return {
        type: DELETE_COMPLIANCE,
        payload: id
    }
};

export const getCompliancesFailure = () => {
    return {
        type: GET_SUB_COMPONENT_FAILURE
    };
};