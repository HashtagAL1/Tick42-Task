import axios from 'axios';
import { IEmployee } from '../types/employeeTypes';
import { IProject } from '../types/projectTypes'

export const fetchProjects = () => {
    return axios.get<IProject>('http://localhost:3001/projects/all')
};

export const deleteProjectRequest = (id: string) => {
    return axios.delete<string>(`http://localhost:3001/projects/${id}`);
};

export const startProjectRequest = (id: string) => {
    return axios.post<string>('http://localhost:3001/projects/start', { projectId: id });
};

export const createProjectRequest = (project: IProject) => {
    return axios.post<IProject>('http://localhost:3001/projects/add', { project });
};

export const completeProjectRequest = (projectId: string | undefined, revenue: number | undefined) => {
    return axios.post<IProject>('http://localhost:3001/projects/complete', { projectId, revenue });
};

export const editProjectTeamRequest = (projectId: string | undefined, team: IEmployee[]) => {
    return axios.post<IEmployee[]>('http://localhost:3001/projects/editTeam', { projectId, team });
};