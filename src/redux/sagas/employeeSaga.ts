import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchEmployees } from '../../requesters/employees';
import { IEmployee } from '../../types/employeeTypes';
import { getEmployeesFailAction, getEmployeesSuccessAction } from '../actions/employee-actions/actions';
import EmployeeActionTypes from '../actions/employee-actions/actionTypes';
import { setLoading } from '../actions/shared-actions/actions';

export function* employeeSaga() {
    yield takeLatest(EmployeeActionTypes.GET_EMPLOYEES, getEmployees)
};

export function* getEmployees() {
    try {
        yield setLoading(true);
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