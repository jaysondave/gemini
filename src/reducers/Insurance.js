import { GET_INSURANCES_SUCCESS } from "../constants/ActionTypes";

const INIT_STATE = {
    insurances: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_INSURANCES_SUCCESS:
            return {
                ...state,
                insurances: action.payload,
            };
        default:
            return state;
    }
}
