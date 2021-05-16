import { IEmployee } from "../../../types/employeeTypes";
import EmployeeActionTypes from "./actionTypes";

export interface GetEmployeesAction {
    type: typeof EmployeeActionTypes.GET_EMPLOYEES
};

export interface GetEmployeesSuccessAction {
    type: typeof EmployeeActionTypes.GET_EMPLOYEES_SUCCESS,
    payload: IEmployee[]
};

export interface GetEmployeesFailAction {
    type: typeof EmployeeActionTypes.GET_EMPLOYEES_FAIL
};

export interface ResetEmployeesAction {
    type: typeof EmployeeActionTypes.RESET_EMPLOYEES
}