import { AppActionTypes } from '../action-types';

const initialState = {
    showAppModal: false,
    modalMessage: "",
    appIndicator: {
        loading: false,
        message: ''
    },
    genericData: []
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case AppActionTypes.SHOW_APP_MODAL:
            return Object.assign({}, state, {
                showAppModal: true,
                modalMessage: action.payload.modalMessage
            });
        case AppActionTypes.HIDE_APP_MODAL:
            return Object.assign({}, state, {
                showAppModal: false,
                modalMessage: ""
            });
        case AppActionTypes.SHOW_APP_INDICATOR:
            return Object.assign({}, state, {
                appIndicator: {
                    loading: true,
                    message: action.payload
                }
            });
        case AppActionTypes.HIDE_APP_INDICATOR:
            return Object.assign({}, state, {
                appIndicator: {
                    loading: false,
                    message: ""
                }
            });
        case AppActionTypes.ADD_GENERIC_DATA:
            return Object.assign({}, state, {
                genericData: action.payload
            });
        default:
            return state;
    }
}
export default appReducer;