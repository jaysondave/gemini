import {
   GET_REGISTRATION_TAX_TYPE_SUCCESS,
} from "../constants/ActionTypes";

const INIT_STATE = {
    registrationTaxTypes: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_REGISTRATION_TAX_TYPE_SUCCESS:
            return {
                ...state,
                registrationTaxTypes: action.payload,
            };
        default:
            return state;
    }
}
