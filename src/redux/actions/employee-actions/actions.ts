import { IEmployee } from "../../../types/employeeTypes";
import EmployeeActionTypes from "./actionTypes";
import { 
    GetEmployeesAction, 
    GetEmployeesFailAction, 
    GetEmployeesSuccessAction,
    ResetEmployeesAction 
} from "./types";

export const getEmployeesAction = (): GetEmployeesAction => {
    return { type: EmployeeActionTypes.GET_EMPLOYEES }
};

export const getEmployeesSuccessAction = (payload: IEmployee[]): GetEmployeesSuccessAction => {
    return { type: EmployeeActionTypes.GET_EMPLOYEES_SUCCESS, payload };
};

export const getEmployeesFailAction = (): GetEmployeesFailAction => {
    return { type: EmployeeActionTypes.GET_EMPLOYEES_FAIL }
};

export const resetEmployeesAction = (): ResetEmployeesAction => {
    return { type: EmployeeActionTypes.RESET_EMPLOYEES };
};