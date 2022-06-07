import { configStore } from '../store';
import { AuthActionTypes } from '../action-types';

export const dispatchLoginUser = (payload) => {
  configStore.dispatch({
    payload,
    type: AuthActionTypes.LOGIN,
  });
};

export const dispatchLogoutUser = () => {
  configStore.dispatch({
    payload: undefined,
    type: AuthActionTypes.LOGOUT,
  });
};