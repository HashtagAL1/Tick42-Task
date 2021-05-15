import { IProject } from "../types/projectTypes";

export const filterProjects = (projects: IProject[], status: string): IProject[] => {
    if (status === 'All') return [...projects];

    return projects.filter(p => p.status === status);
};