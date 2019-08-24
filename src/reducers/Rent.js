import { GET_RENTS_SUCCESS } from "../constants/ActionTypes";
const INIT_STATE = {
    rents: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_RENTS_SUCCESS:
            return {
                ...state,
                rents: action.payload,
            };
        default:
            return state;
    }
}
