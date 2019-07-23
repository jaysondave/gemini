import {
    GET_CATEGORIES_START,
    GET_CATEGORIES_SUCCESS,

} from "constants/ActionTypes";

const INIT_STATE = {
    category: null
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORIES_START: {
            return {
                ...state,
                loader: true,
            }
        }

        case GET_CATEGORIES_SUCCESS: {
            return {
                ...state,
                loader: false,
                category: action.payload.category,
            }
        }
        default:
            return state;
    }
}
