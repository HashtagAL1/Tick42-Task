import axios from 'axios';
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