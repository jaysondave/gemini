import {
    GET_CONTRACT_TYPE_SUCCESS,

} from "../constants/ActionTypes";

const INIT_STATE = {
    contractTypes: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_CONTRACT_TYPE_SUCCESS:
            return {
                ...state,
                contractTypes: action.payload,
            };
        default:
            return state;
    }
}
