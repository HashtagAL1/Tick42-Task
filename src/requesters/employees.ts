import axios from 'axios';
import { AddEmployeeActionPayload } from '../redux/actions/employee-actions/types';
import { IEmployee } from '../types/employeeTypes';

const BASE_URL = 'http://localhost:3001/employees';

export const fetchEmployees = () => {
    return axios.get<IEmployee>(`${BASE_URL}/all`);
};

export const addEmployeeRequest = (firstName: string, lastName: string) => {
    const employee = { firstName, lastName };
    return axios.post<IEmployee>(`${BASE_URL}/add`, { employee });
};

export const deleteEmployeeRequest = (id: string) => {
    return axios.delete<string>(`${BASE_URL}/${id}`)
};

export const editEmployeeRequest = (employee: AddEmployeeActionPayload) => {
    return axios.post<IEmployee>(`${BASE_URL}/edit`, { employee });
};