import { IEmployee } from "./employeeTypes";

export interface IProject {
    id: string,
    name: string,
    status: string,
    employees: IEmployee[],
    revenue: number | null,
    expectedRevenue: number | undefined
}

