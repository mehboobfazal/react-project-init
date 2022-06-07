import { AuthActionTypes } from "../action-types";

const initialState = {
  isLoggedIn: false,
  authorizationToken: undefined,
  userType: null,
  userData: undefined,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return Object.assign({}, state, action.payload);
    case AuthActionTypes.LOGOUT:
      return Object.assign({}, state, {
        isLoggedIn: false,
        authorizationToken: undefined,
        userType: null,
        userData: undefined,
      });
    default:
      return state;
  }
};
export default authReducer;
