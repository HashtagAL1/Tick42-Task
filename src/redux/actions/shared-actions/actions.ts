import SharedActionTypes from "./actionTypes";
import { LoadingAction } from "./types";

export const setLoading = (value: boolean): LoadingAction => {
    return { type: SharedActionTypes.LOADING, payload: value };
};