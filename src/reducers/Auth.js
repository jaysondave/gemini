import {
    INIT_URL,
    ON_HIDE_LOADER,
    ON_SHOW_LOADER,
    SIGNIN_FACEBOOK_USER_SUCCESS,
    SIGNIN_GITHUB_USER_SUCCESS,
    SIGNIN_GOOGLE_USER_SUCCESS,
    SIGNIN_TWITTER_USER_SUCCESS,
    SIGNIN_USER_SUCCESS,
    SIGNOUT_USER_SUCCESS,
    SIGNUP_USER_SUCCESS
} from "constants/ActionTypes";

const INIT_STATE = {
    initURL: '',
    authUser: JSON.parse(localStorage.getItem('user')),
    headers: JSON.parse(localStorage.getItem('headers')),
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SIGNUP_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                authUser: action.payload.user,
                headers: action.payload.headers
            }
        }
        case SIGNIN_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                authUser: action.payload.user,
                headers: action.payload.headers
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
                headers: null,
                initURL: '/app/',
                loader: false
            }
        }


        case SIGNIN_GOOGLE_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                authUser: action.payload
            }
        }
        case SIGNIN_FACEBOOK_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                authUser: action.payload
            }
        }
        case SIGNIN_TWITTER_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                authUser: action.payload
            }
        }
        case SIGNIN_GITHUB_USER_SUCCESS: {
            return {
                ...state,
                loader: false,
                authUser: action.payload
            }
        }

        default:
            return state;
    }
}
