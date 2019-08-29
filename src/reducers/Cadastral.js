import {GET_CADASTRALS_SUCCESS} from "../constants/ActionTypes";

const INIT_STATE = {
    cadastrals: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_CADASTRALS_SUCCESS:
            return {
                ...state,
                cadastrals: action.payload,
            };
        default:
            return state;
    }
}
