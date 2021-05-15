import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsAction, resetProjectsAction } from '../../redux/actions/project-actions/actions';
import { IProject } from '../../types/projectTypes';
import { IRootState } from '../../types/reducerTypes';
import ProjectCardContent from '../projects/ProjectCardContent';
import ProjectStatusFilter from '../projects/ProjectStatusFilter';
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

                <input className="w-30" style={{marginLeft: '3%'}} type="text" placeholder="search" />
            </div>

            <div className="flex-15 text-right">
                <button className="w-75">asd</button>
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