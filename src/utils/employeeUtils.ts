import { IEmployee } from "../types/employeeTypes";

export const getEmployeeByName = (employees: IEmployee[], searchTerm: string | any): IEmployee | undefined => {
    if(!searchTerm) return undefined;

    return employees.find(e => e.name === searchTerm);
};

export const addEmployee = (employees: IEmployee[], employee: IEmployee) => {
    return [...employees, employee];
};

export const deleteEmployee = (employees: IEmployee[], id:string) => {
    if(!id) return [...employees];

    return employees.filter(e => e.id !== id);
};

export const alterEmployee = (employees: IEmployee[], employee: IEmployee) => {
    if(!employee) return [...employees];

    const targetIndex = employees.findIndex(e => e.id === employee.id);
    if(targetIndex >= 0) {
        employees[targetIndex] = {...employees[targetIndex], ...employee};
    }

    return [...employees];
};