import { IEmployeesReducerState } from "../../types/reducerTypes";
import EmployeeActionTypes from "../actions/employee-actions/actionTypes";

export const initState: IEmployeesReducerState = {
    employees: [],
    selectedEmployee: null
};

export const employeeReducer = (state = initState, action: any): IEmployeesReducerState => {
    switch (action.type) {
        case EmployeeActionTypes.GET_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: action.payload
            }
        case EmployeeActionTypes.GET_EMPLOYEES_FAIL:
            return {
                ...state,
                employees: initState.employees
            }
        case EmployeeActionTypes.ALTER_EMPLOYEES_COLLECTION:
            return {
                ...state,
                employees: action.payload
            }
        case EmployeeActionTypes.SET_SELECTED_EMPLOYEE:
            return {
                ...state,
                selectedEmployee: action.payload
            }
        default: return state;
    }
};

