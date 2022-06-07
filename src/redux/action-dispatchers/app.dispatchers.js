import { configStore } from "../store";
import { AppActionTypes } from "../action-types";

export const dispatchGenericData = (payload) => {
    configStore.dispatch({
        payload,
        type: AppActionTypes.ADD_GENERIC_DATA
    });
}