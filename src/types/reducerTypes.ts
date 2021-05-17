import { IEmployee } from "./employeeTypes";
import { IProject } from "./projectTypes";

export interface IProjectReducerState {
    projects: IProject[],
    filteredProjects: IProject[],
    selectedStatus: string,
    statuses: string[],
    selectedProject: IProject | null
};

export interface ISharedReducerState {
    loading: boolean
};

export interface IRootState {
    shared: ISharedReducerState,
    projects: IProjectReducerState,
    dashboard: IDashboardReducerState,
    employees: IEmployeesReducerState
};

export interface IDashboardReducerState {
    employees: number | null,
    projects: number | null,
    completedProjects: number | null,
    onHoldProjects: number | null,
    inProgressProjects: number | null,
    profitableProjects: number | null,
    nonProfitableProjects: number | null,
    totalRevenue: number | null,
    totalExpectedRevenue: number | null
};

export interface IEmployeesReducerState {
    employees: IEmployee[],
    selectedEmployee: IEmployee | null
}