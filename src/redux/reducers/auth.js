import { AuthActionTypes } from '../action-types';

const initialState = {
    isLoggedIn: false,
    tokens: undefined,
    userData: undefined
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return Object.assign({}, state, {
                isLoggedIn: action.payload.isLoggedIn,
                userData: action.payload.userData,
                tokens: action.payload.tokens
            });
        case AuthActionTypes.LOGOUT:
            return Object.assign({}, state, {
                ...state,
                isLoggedIn: false,
                userData: undefined,
                tokens: undefined
            });
        default:
            return state;
    };
};

export default authReducer;