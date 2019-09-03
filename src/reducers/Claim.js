import { GET_CLAIMS_SUCCESS } from "../constants/ActionTypes";

const INIT_STATE = {
    claims: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_CLAIMS_SUCCESS:
            return {
                ...state,
                claims: action.payload,
            };
        default:
            return state;
    }
}
