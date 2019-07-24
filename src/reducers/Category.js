import {
    GET_CATEGORIES_SUCCESS,
    CREATE_NEW_CATEGORY

} from "constants/ActionTypes";

const INIT_STATE = {
    allCategory: []
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                allCategory: action.payload.category,
            };
        default:
            return state;
    }
}
