import {
    GET_COMPONENT_SUCCESS,

} from "../constants/ActionTypes";

const INIT_STATE = {
    allComponent: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_COMPONENT_SUCCESS:
            return {
                ...state,
                allComponent: action.payload,
            };
        default:
            return state;
    }
}
