import { IProject } from "./projectTypes";

export interface IProjectReducerState {
    projects: IProject[]
};

export interface ISharedReducerState {
    loading: boolean
};

export interface IRootState {
    shared: ISharedReducerState,
    projects: IProjectReducerState,
    dashboard: IDashboardReducerState
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