import {
    GET_BODIES_SUCCESS
} from "../constants/ActionTypes";

const INIT_STATE = {
    bodies: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_BODIES_SUCCESS:
            return {
                ...state,
                bodies: action.payload,
            };
        default:
            return state;
    }
}
