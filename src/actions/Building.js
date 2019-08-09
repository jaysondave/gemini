import {
    NEW_BUILDING,
    GET_BUILDINGS_SUCCESS,
    FETCH_ALL_BUILDING
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
