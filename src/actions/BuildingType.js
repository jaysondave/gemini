import {
    GET_BUILDING_TYPE_SUCCESS,
    GET_BUILDING_TYPE_START,
    GET_BUILDING_TYPE_FAILURE,
    CREATE_BUILDING_TYPE,
    UPDATE_BUILDING_TYPE,
    DELETE_BUILDING_TYPE
} from '../constants/ActionTypes';

export const fetchBuildingTypes = () => {
    return {
        type: GET_BUILDING_TYPE_START,
    }
};

export const fetchBuildingTypesSuccess = (building_type) => {
    return {
        type: GET_BUILDING_TYPE_SUCCESS,
        payload: building_type
    }
};
export const createNewBuildingType = (body) => {
    return {
        type: CREATE_BUILDING_TYPE,
        payload: body
    }
};
export const updateSelectedBuildingType = (id, body) => {
    return {
        type: UPDATE_BUILDING_TYPE,
        payload: {id, body}
    }
};
export const deleteSelectedBuildingType = (id) => {
    return {
        type: DELETE_BUILDING_TYPE,
        payload: id
    }
};

export const getBuildingTypesFailure = () => {
    return {
        type: GET_BUILDING_TYPE_FAILURE
    };
};