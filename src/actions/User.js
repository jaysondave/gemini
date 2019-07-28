import {
    FETCH_ALL_USER,
    GET_USERS_SUCCESS,
    REGISTER_USER
} from '../constants/ActionTypes';


export const registerUser = (user) => {
    return {
        type: REGISTER_USER,
        payload: user
    };
};

export const fetchUsers = () => {
    return {
        type: FETCH_ALL_USER
    }
};

export const fetchUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
};
