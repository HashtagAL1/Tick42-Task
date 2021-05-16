import { IEmployeesReducerState } from "../../types/reducerTypes";
import EmployeeActionTypes from "../actions/employee-actions/actionTypes";

export const initState: IEmployeesReducerState = {
    employees: []
};

export const employeeReducer = (state = initState, action: any): IEmployeesReducerState => {
    switch (action.type) {
        case EmployeeActionTypes.GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: action.payload
            }
        default: return state;
    }
};

