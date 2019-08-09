import {
    GET_BUILDINGS_SUCCESS
} from "../constants/ActionTypes";

const INIT_STATE = {
    buildings: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_BUILDINGS_SUCCESS:
            return {
                ...state,
                buildings: action.payload,
            };
        default:
            return state;
    }
}
