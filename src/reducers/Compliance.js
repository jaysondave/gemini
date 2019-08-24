import {
    GET_COMPLIANCE_SUCCESS,
} from "../constants/ActionTypes";

const INIT_STATE = {
    compliances: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_COMPLIANCE_SUCCESS:
            return {
                ...state,
                compliances: action.payload,
            };
        default:
            return state;
    }
}
