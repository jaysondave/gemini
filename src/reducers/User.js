import {
    GET_USERS_SUCCESS
} from "../constants/ActionTypes";

const INIT_STATE = {
    users: null,
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                users: action.payload,
            }
        }
        default:
            return state;
    }
}
