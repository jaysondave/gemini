import {
    GET_COMPONENT_SUCCESS, GET_TARGET_SUCCESS,

} from "../constants/ActionTypes";

const INIT_STATE = {
    targets: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_TARGET_SUCCESS:
            return {
                ...state,
                targets: action.payload,
            };
        default:
            return state;
    }
}
