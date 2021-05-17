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

export interface AddEmployeeActionPayload {
    firstName: string,
    lastName: string
}

export interface AddEmployeeAction {
    type: typeof EmployeeActionTypes.ADD_EMPLOYEE,
    payload: AddEmployeeActionPayload
};

export interface AddEmployeeSuccessAction {
    type: typeof EmployeeActionTypes.ADD_EMPLOYEE_SUCCESS
};

export interface AddEmployeeFailAction {
    type: typeof EmployeeActionTypes.ADD_EMPLOYEE_FAIL
};

export interface DeleteEmployeeAction {
    type: typeof EmployeeActionTypes.DELETE_EMPLOYEE,
    payload: string
};

export interface DeleteEmployeeSuccessAction {
    type: typeof EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS
};

export interface DeleteEmployeeFailAction {
    type: typeof EmployeeActionTypes.DELETE_EMPLOYEE_FAIL
};

export interface SetSelectedEmployeeAction {
    type: typeof EmployeeActionTypes.SET_SELECTED_EMPLOYEE,
    payload: IEmployee | null
};

export interface EditEmployeeAction {
    type: typeof EmployeeActionTypes.EDIT_EMPLOYEE,
    payload: AddEmployeeActionPayload
};

export interface EditEmployeeSuccessAction {
    type: typeof EmployeeActionTypes.EDIT_EMPLOYEE_SUCCESS
};

export interface EditEmployeeFailAction {
    type: typeof EmployeeActionTypes.EDIT_EMPLOYEE_FAIL
};

export interface AlterEmployeesCollectionAction {
    type: typeof EmployeeActionTypes.ALTER_EMPLOYEES_COLLECTION,
    payload: IEmployee[]
}

export interface ResetEmployeesAction {
    type: typeof EmployeeActionTypes.RESET_EMPLOYEES
}