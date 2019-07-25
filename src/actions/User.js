import {
    GET_USERS_SUCCESS,
    REGISTER_USER
} from '../constants/ActionTypes';


export const registerUSer = (user) => {
    return {
        type: REGISTER_USER,
        payload: user
    };
};

export const fetchUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
};
