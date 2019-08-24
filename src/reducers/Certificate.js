import {GET_CERTIFICATES_SUCCESS} from "../constants/ActionTypes";
const INIT_STATE = {
    certificates: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_CERTIFICATES_SUCCESS:
            return {
                ...state,
                certificates: action.payload,
            };
        default:
            return state;
    }
}
