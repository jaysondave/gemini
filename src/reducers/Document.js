import { GET_DOCUMENTS_SUCCESS } from "../constants/ActionTypes";
const INIT_STATE = {
    documents: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_DOCUMENTS_SUCCESS:
            return {
                ...state,
                documents: action.payload,
            };
        default:
            return state;
    }
}
