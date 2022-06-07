import { createStore, compose, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "../reducers";

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["authReducer"],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configStore = createStore(persistedReducer, composeEnhancers(applyMiddleware(createLogger())));
export const persistedStore = persistStore(configStore);
