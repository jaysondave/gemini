import {
    GET_BUILDING_TYPE_SUCCESS,

} from "../constants/ActionTypes";

const INIT_STATE = {
    allBuildingType: []
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case GET_BUILDING_TYPE_SUCCESS:
            return {
                ...state,
                allBuildingType: action.payload,
            };
        default:
            return state;
    }
}
