import { ISharedReducerState } from "../../types/reducerTypes";

export const initState: ISharedReducerState = {
    loading: false
};

export const sharedReducer = (state = initState, action: any): ISharedReducerState => {
    switch (action.type) {
        default: return state;
    }
};
