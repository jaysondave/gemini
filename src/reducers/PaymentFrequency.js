import {
    GET_PAYMENT_FREQUENCY_SUCCESS,
} from "../constants/ActionTypes";

const INIT_STATE = {
    paymentFrequencies: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_PAYMENT_FREQUENCY_SUCCESS:
            return {
                ...state,
                paymentFrequencies: action.payload,
            };
        default:
            return state;
    }
}
