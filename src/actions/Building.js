import {
    NEW_BUILDING,
    GET_BUILDINGS_SUCCESS,
    FETCH_ALL_BUILDING,
    DELETE_BUILDING,
    UPDATE_BUILDING
} from '../constants/ActionTypes';


export const createNewBuilding = (building) => {
    return {
        type: NEW_BUILDING,
        payload: building
    };
};

export const fetchBuildings = () => {
    return {
        type: FETCH_ALL_BUILDING
    }
};

export const fetchBuildingsSuccess = (buildings) => {
    return {
        type: GET_BUILDINGS_SUCCESS,
        payload: buildings
    }
};
export const updateBuilding = (id, body) => {
    return {
        type: UPDATE_BUILDING,
        payload: {id, body}
    }
};
export const deleteBuilding = (id) => {
    return {
        type: DELETE_BUILDING,
        payload: id
    }
};