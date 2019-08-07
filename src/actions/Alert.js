import {
    HIDE_MESSAGE,
    ON_HIDE_LOADER,
    ON_SHOW_LOADER,
    SHOW_MESSAGE,
} from '../constants/ActionTypes';

export const showMessage = (message) => {
    return {
        type: SHOW_MESSAGE,
        payload: message
    };
};
export const showLoader = () => {
    return {
        type: ON_SHOW_LOADER,
    };
};

export const hideMessage = () => {
    return {
        type: HIDE_MESSAGE,
    };
};
export const hideLoader = () => {
    return {
        type: ON_HIDE_LOADER,
    };
};
