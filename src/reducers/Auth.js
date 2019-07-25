import {
    INIT_URL,
    SIGNIN_USER_SUCCESS,
    SIGNOUT_USER_SUCCESS,
    SIGNUP_USER_SUCCESS
} from "constants/ActionTypes";
import {userHelper} from "../helpers";

const INIT_STATE = {
    initURL: '',
    authUser: userHelper.getStorage('authUser'),
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SIGNUP_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                authUser: action.payload.user,
            }
        }
        case SIGNIN_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                authUser: action.payload,
            }
        }
        case INIT_URL: {
            return {
                ...state,
                initURL: action.payload
            }
        }
        case SIGNOUT_USER_SUCCESS: {
            return {
                ...state,
                authUser: null,
                initURL: '/app/',
                loader: false
            }
        }
        default:
            return state;
    }
}
