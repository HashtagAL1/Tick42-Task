import { IEmployee } from "../types/employeeTypes";
import { IProject } from "../types/projectTypes";

export const filterProjects = (projects: IProject[], status: string): IProject[] => {
    if (status === 'All') return [...projects];

    return projects.filter(p => p.status === status);
};

export const removeProject = (projects: IProject[], id: string): IProject[] => {
    if(!id) return [...projects];

    return projects.filter(p => p.id !== id);
};

export const setProjectStatus = (projects: IProject[], id: string, newStatus: string) => {
    if(!id || !newStatus) return [...projects];

    const targetIndex = projects.findIndex(p => p.id === id);

    if(targetIndex < 0) return [...projects];
    
    projects[targetIndex] = {...projects[targetIndex], status: newStatus};

    return [...projects];
};

export const addProject = (projects: IProject[], project: IProject) => {
    return [...projects, project];
};

export const replaceProject = (projects: IProject[], newProject: IProject) => {
    const targetIndex = projects.findIndex(p => p.id === newProject.id);
    if (targetIndex >= 0) {
        projects[targetIndex] = {...projects[targetIndex], ...newProject};
    }
    return [...projects];
};

export const setProjectTeam = (projects: IProject[], projectId: string | undefined, newTeam: IEmployee[]) => {
    const targetIndex = projects.findIndex(p => p.id === projectId);
    if(targetIndex >= 0) {
        projects[targetIndex] = {...projects[targetIndex], employees: [...newTeam]}
    }

    return [...projects];
};