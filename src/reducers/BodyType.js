import {
    GET_BODY_TYPE_SUCCESS,

} from "../constants/ActionTypes";

const INIT_STATE = {
    allBodyType: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_BODY_TYPE_SUCCESS:
            return {
                ...state,
                allBodyType: action.payload,
            };
        default:
            return state;
    }
}
