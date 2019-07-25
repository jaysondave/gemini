import {
    GET_USERS_SUCCESS
} from "../constants/ActionTypes";

const INIT_STATE = {
    initURL: '',
    users: null,
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                loader: false,
                users: action.payload,
            }
        }
        default:
            return state;
    }
}
