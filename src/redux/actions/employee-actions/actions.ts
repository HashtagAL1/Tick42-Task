import { IEmployee } from "../../../types/employeeTypes";
import { AddProjectAction } from "../project-actions/types";
import EmployeeActionTypes from "./actionTypes";
import { 
    AddEmployeeAction,
    AddEmployeeActionPayload,
    AddEmployeeSuccessAction,
    GetEmployeesAction, 
    GetEmployeesFailAction, 
    GetEmployeesSuccessAction,
    AddEmployeeFailAction,
    AlterEmployeesCollectionAction,
    ResetEmployeesAction, 
    DeleteEmployeeAction,
    DeleteEmployeeSuccessAction,
    DeleteEmployeeFailAction,
    EditEmployeeAction
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

export const addEmployeeAction = (payload: AddEmployeeActionPayload): AddEmployeeAction => {
    return { type: EmployeeActionTypes.ADD_EMPLOYEE, payload };
};

export const addEmployeeSuccessAction = (): AddEmployeeSuccessAction => {
    return { type: EmployeeActionTypes.ADD_EMPLOYEE_SUCCESS };
};

export const addEmployeeFailAction = (): AddEmployeeFailAction => {
    return { type: EmployeeActionTypes.ADD_EMPLOYEE_FAIL };
};

export const alterEmployeesCollection = (newEmployees: IEmployee[]): AlterEmployeesCollectionAction => {
    return { type: EmployeeActionTypes.ALTER_EMPLOYEES_COLLECTION, payload: newEmployees };
};

export const deleteEmployeeAction = (payload:string): DeleteEmployeeAction => {
    return { type: EmployeeActionTypes.DELETE_EMPLOYEE, payload };
};

export const deleteEmployeeSuccessAction = (): DeleteEmployeeSuccessAction => {
    return { type: EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS }
};

export const deleteEmployeeFailAction = (): DeleteEmployeeFailAction => {
    return { type: EmployeeActionTypes.DELETE_EMPLOYEE_FAIL };
};

export const setSelectedEmployee = (employee: IEmployee | null) => {
    return { type: EmployeeActionTypes.SET_SELECTED_EMPLOYEE, payload: employee };
};

export const editEmployeeAction = (payload: AddEmployeeActionPayload): EditEmployeeAction => {
    return { type: EmployeeActionTypes.EDIT_EMPLOYEE, payload };
}

export const resetEmployeesAction = (): ResetEmployeesAction => {
    return { type: EmployeeActionTypes.RESET_EMPLOYEES };
};