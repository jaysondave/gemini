import { GET_FLOORS_SUCCESS } from "../constants/ActionTypes";
const INIT_STATE = {
    floors: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_FLOORS_SUCCESS:
            return {
                ...state,
                floors: action.payload,
            };
        default:
            return state;
    }
}
