import { IEmployee } from "../types/employeeTypes";

export const getEmployeeByName = (employees: IEmployee[], searchTerm: string | any): IEmployee | undefined => {
    if(!searchTerm) return undefined;

    return employees.find(e => e.name === searchTerm);
};