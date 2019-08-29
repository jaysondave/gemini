import {GET_CADASTRAL_KIND_SUCCESS} from "../constants/ActionTypes";
const INIT_STATE = {
    cadastralKinds: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_CADASTRAL_KIND_SUCCESS:
            return {
                ...state,
                cadastralKinds: action.payload,
            };
        default:
            return state;
    }
}
