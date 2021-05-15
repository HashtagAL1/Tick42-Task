import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsAction, resetProjectsAction } from '../../redux/actions/project-actions/actions';
import { IProject } from '../../types/projectTypes';
import { IRootState } from '../../types/reducerTypes';
import ProjectCardContent from '../projects/ProjectCardContent';
import ProjectStatusFilter from '../projects/ProjectStatusFilter';
import Button from '../shared/Button';
import Card from '../shared/Card';

const ProjectList: React.FC = () => {
    const dispatch = useDispatch();

    const filteredProjects = useSelector<IRootState, IProject[]>(state => state.projects.filteredProjects);

    useEffect(() => {
        dispatch(getProjectsAction());

        return () => {
            dispatch(resetProjectsAction());
        }
    }, [dispatch])
    return <div className="main-content">
        <div className="flex-row-container mb-3">
            <div className="flex-85">                
                <ProjectStatusFilter />
            </div>

            <div className="flex-15 text-right">
                <Button className="w-75 button-green button-rectangular font-color-default font-weight-bold font-size-large" 
                    title="Create"
                />
            </div>
        </div>

        <div>
            {filteredProjects.map((p, i) => {
                return <Card key={p.id} className="list-card list-card-min-height" shouldDisplay={true}>
                    <ProjectCardContent project={p}/>
                </Card>
            })}
        </div>
    </div>
};

export default ProjectList;