import { GET_SYSTEMS_SUCCESS} from "../constants/ActionTypes";
const INIT_STATE = {
    systems: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_SYSTEMS_SUCCESS:
            return {
                ...state,
                systems: action.payload,
            };
        default:
            return state;
    }
}
