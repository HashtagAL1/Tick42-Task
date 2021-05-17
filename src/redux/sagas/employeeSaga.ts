import { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { addEmployeeRequest, deleteEmployeeRequest, editEmployeeRequest, fetchEmployees } from '../../requesters/employees';
import { IEmployee } from '../../types/employeeTypes';
import { IRootState } from '../../types/reducerTypes';
import { addEmployee, alterEmployee, deleteEmployee } from '../../utils/employeeUtils';
import { addEmployeeFailAction, addEmployeeSuccessAction, alterEmployeesCollection, deleteEmployeeFailAction, deleteEmployeeSuccessAction, getEmployeesFailAction, getEmployeesSuccessAction } from '../actions/employee-actions/actions';
import EmployeeActionTypes from '../actions/employee-actions/actionTypes';
import { AddEmployeeAction, DeleteEmployeeAction, EditEmployeeAction } from '../actions/employee-actions/types';
import { editProjectTeamFailAction, editProjectTeamSuccessAction } from '../actions/project-actions/actions';
import { setLoading } from '../actions/shared-actions/actions';

const getStoredEmployees = (state: IRootState) => state.employees.employees;

export function* employeeSaga() {
    yield takeLatest(EmployeeActionTypes.GET_EMPLOYEES, getEmployees);
    yield takeLatest(EmployeeActionTypes.ADD_EMPLOYEE, createEmployee);
    yield takeLatest(EmployeeActionTypes.DELETE_EMPLOYEE, removeEmployee);
    yield takeLatest(EmployeeActionTypes.EDIT_EMPLOYEE, editEmployee);
};

export function* getEmployees() {
    try {
        yield put(setLoading(true));
        const response: AxiosResponse = yield call(fetchEmployees);
        let { employees } = response.data;
        employees = employees.map((emp: IEmployee) => {
            return {...emp, value: emp.name}
        });
        yield put(getEmployeesSuccessAction(employees));
        yield put(setLoading(false));
    } catch(e) {
        yield put(getEmployeesFailAction());
        yield put(setLoading(false));
    }
};

export function* createEmployee(action: AddEmployeeAction) {
    try {
        const employees: IEmployee[] = yield select(getStoredEmployees);

        yield put(setLoading(true));
        const response: AxiosResponse = yield call(addEmployeeRequest, action.payload.firstName, action.payload.lastName);
        const { employee } = response.data;
        const newEmployees: IEmployee[] = yield call(addEmployee, employees, employee);

        yield put(addEmployeeSuccessAction());
        yield put(alterEmployeesCollection(newEmployees));
        yield put(setLoading(false));
    } catch(e) {
        yield put(addEmployeeFailAction());
        yield put(setLoading(false));
    }
};

export function* removeEmployee(action: DeleteEmployeeAction) {
    try {
        const employees: IEmployee[] = yield select(getStoredEmployees);

        yield put(setLoading(true));
        const response: AxiosResponse = yield call(deleteEmployeeRequest, action.payload);
        const { employeeId } = response.data;
        const newEmployees: IEmployee[] = yield call(deleteEmployee, employees, employeeId);

        yield put(deleteEmployeeSuccessAction());
        yield put(alterEmployeesCollection(newEmployees));
        yield put(setLoading(false));
    } catch(e) {
        yield put(deleteEmployeeFailAction());
        yield put(setLoading(false));
    }
};

export function* editEmployee(action: EditEmployeeAction) {
    try {
        const employees: IEmployee[] = yield select(getStoredEmployees);

        yield put(setLoading(true));
        const response: AxiosResponse = yield call(editEmployeeRequest, action.payload);
        const { employee } = response.data;
        const newEmployees: IEmployee[] = yield call(alterEmployee, employees, employee);

        yield put(editProjectTeamSuccessAction());
        yield put(alterEmployeesCollection(newEmployees))
        yield put(setLoading(false));
    } catch(e) {
        yield put(editProjectTeamFailAction());
        yield put(setLoading(false));
    }
};