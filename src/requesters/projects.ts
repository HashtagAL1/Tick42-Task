import axios from 'axios';
import { IEmployee } from '../types/employeeTypes';
import { IProject } from '../types/projectTypes'

const BASE_URL = 'http://localhost:3001/projects';

export const fetchProjects = () => {
    return axios.get<IProject>(`${BASE_URL}/all`)
};

export const deleteProjectRequest = (id: string) => {
    return axios.delete<string>(`${BASE_URL}/${id}`);
};

export const startProjectRequest = (id: string) => {
    return axios.post<string>(`${BASE_URL}/start`, { projectId: id });
};

export const createProjectRequest = (project: IProject) => {
    return axios.post<IProject>(`${BASE_URL}/add`, { project });
};

export const completeProjectRequest = (projectId: string | undefined, revenue: number | undefined) => {
    return axios.post<IProject>(`${BASE_URL}/complete`, { projectId, revenue });
};

export const editProjectTeamRequest = (projectId: string | undefined, team: IEmployee[]) => {
    return axios.post<IEmployee[]>(`${BASE_URL}/editTeam`, { projectId, team });
};