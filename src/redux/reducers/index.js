import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import appReducer from "./app.reducer";

export const rootReducer = combineReducers({
    appReducer,
    authReducer,
});
