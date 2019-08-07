import {
    GET_SUB_COMPONENT_SUCCESS,

} from "../constants/ActionTypes";

const INIT_STATE = {
    allSubComponent: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_SUB_COMPONENT_SUCCESS:
            return {
                ...state,
                allSubComponent: action.payload,
            };
        default:
            return state;
    }
}
