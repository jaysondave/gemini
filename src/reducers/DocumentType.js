import {GET_DOCUMENT_TYPE_SUCCESS} from "../constants/ActionTypes";

const INIT_STATE = {
    documentTypes: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_DOCUMENT_TYPE_SUCCESS:
            return {
                ...state,
                documentTypes: action.payload,
            };
        default:
            return state;
    }
}
