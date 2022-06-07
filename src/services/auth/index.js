import AppConstants from "../../constants";
import { parseJwt } from "../../constants/appDefaults";

const setSessionData = (accessToken) => {
    localStorage.setItem(AppConstants.SessionStorageConstants.SESSION_STORAGE_ACCESS_TOKEN, accessToken);
    localStorage.setItem(AppConstants.SessionStorageConstants.SESSION_STORAGE_IS_USER_LOGGED_IN, "true");
};
export const loginUser = (accessToken) => {
    setSessionData(accessToken);
};

const getUserDataFromSession = (accessToken) => {
    return parseJwt(accessToken);
};
export const validatelocalStorage = () => {
    const isLoggedIn = localStorage.getItem(AppConstants.SessionStorageConstants.SESSION_STORAGE_IS_USER_LOGGED_IN) !== null && localStorage.getItem(AppConstants.SessionStorageConstants.SESSION_STORAGE_IS_USER_LOGGED_IN) === "true";
    const accessToken = localStorage.getItem(AppConstants.SessionStorageConstants.SESSION_STORAGE_ACCESS_TOKEN);
    const userData = accessToken !== undefined && accessToken !== null ? getUserDataFromSession(accessToken) : undefined;
    return {
        userData,
        isLoggedIn,
        tokens:
            accessToken === null
                ? undefined
                : {
                      accessToken,
                  },
    };
};
export const checkAuthentication = () => {
    const sessionData = validatelocalStorage();
    if (sessionData.isLoggedIn && sessionData.tokens !== undefined) {
        loginUser(sessionData.tokens.accessToken);
        return true;
    }
    return false;
};

export const getAuthData = () => {
    const accessToken = localStorage.getItem(AppConstants.SessionStorageConstants.SESSION_STORAGE_ACCESS_TOKEN);
    const authData = accessToken !== undefined && accessToken !== null ? getUserDataFromSession(accessToken) : undefined;
    return authData;
};

export const logoutUser = () => {
    localStorage.clear();
};

export const getTokens = () => {
    const accessToken = localStorage.getItem(AppConstants.SessionStorageConstants.SESSION_STORAGE_ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(AppConstants.SessionStorageConstants.SESSION_STORAGE_REFRESH_TOKEN);
    return {
        accessToken,
        refreshToken,
    };
};
