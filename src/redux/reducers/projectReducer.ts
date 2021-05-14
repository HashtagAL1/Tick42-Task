import { IProjectReducerState } from "../../types/reducerTypes";

export const initState: IProjectReducerState = {
    projects: []
};

export const projectReducer = (state = initState, action: any): IProjectReducerState => {
    switch (action.type) {
        default: return state;
    }
};