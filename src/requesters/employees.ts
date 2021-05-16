import axios from 'axios';
import { IEmployee } from '../types/employeeTypes';

export const fetchEmployees = () => {
    return axios.get<IEmployee>('http://localhost:3001/employees/all');
};