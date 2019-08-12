import {GET_OUTDOOR_SUCCESS} from "../constants/ActionTypes";
const INIT_STATE = {
    outdoors: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_OUTDOOR_SUCCESS:
            return {
                ...state,
                outdoors: action.payload,
            };
        default:
            return state;
    }
}
