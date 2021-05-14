import { ISharedReducerState } from "../../types/reducerTypes";
import SharedActionTypes from "../actions/shared-actions/actionTypes";

export const initState: ISharedReducerState = {
    loading: false
};

export const sharedReducer = (state = initState, action: any): ISharedReducerState => {
    switch (action.type) {
        case SharedActionTypes.LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default: return state;
    }
};
