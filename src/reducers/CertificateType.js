import {GET_CERTIFICATE_TYPE_SUCCESS} from "../constants/ActionTypes";

const INIT_STATE = {
    certificateTypes: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_CERTIFICATE_TYPE_SUCCESS:
            return {
                ...state,
                certificateTypes: action.payload,
            };
        default:
            return state;
    }
}
