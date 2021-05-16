import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProjectAction, setSelectedProject, startProjectAction } from '../../redux/actions/project-actions/actions';
import { IProject } from '../../types/projectTypes';
import Button from '../shared/Button';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
    project: IProject,
    openTeamModal: () => void,
    onComplete: () => void
}

const ProjectCardContent: React.FC<IProps> = ({ project, openTeamModal, onComplete }) => {
    const dispatch = useDispatch();
    const [statusClassName, setStatusClassName] = useState<string>('');

    useEffect(() => {
        let className = '';
        switch(project.status) {
            case 'In Progress': className = 'bg-blue'; break;
            case 'On hold': className = 'bg-orange'; break;
            case 'Completed': className = 'bg-green'; break;
            default: className = '';
        }

        setStatusClassName(className);
    }, [project]);

    const getArrowClass = () => {
        if(project.expectedRevenue && project.revenue && project.revenue >= project.expectedRevenue) {
            return 'arrow-up';
        }

        return 'arrow-down';
    };

    return <>
        <div className="w-100 h-100">
            <div className={`w-100 br-t-5 ${statusClassName}`}>
                <div className="pl-small text-left project-status-text font-size-normal">{project.status}</div>
            </div>

            <div className="mt-smaller pl-small font-color-gray font-weight-bold min-height-8vh">
                <div className="font-size-heading">{project.name}</div>
            </div>

            <div className="mt-small pl-small">
                <div className="font-color-gray font-style-italic font-size-normal font-weight-bold text-decoration-underline">Project details:</div>
                <div>
                    <span className="font-size-small">Expected revenue: </span>
                    <span className="font-color-gray font-weight-bold font-size-normal"> 
                        {project.expectedRevenue?.toFixed(2)}$
                    </span>
                </div>
                <div className="font-size-small">
                    <span className="font-size-small">Earned revenue: </span>
                    <span className="font-color-gray font-weight-bold font-size-normal">
                        {project.revenue !== null ? `${project.revenue.toFixed(2)}$` : '-'}
                    </span>
                    {project.revenue !== null ? 
                        <i className={`ml-smaller arrow ${getArrowClass()}`}></i> 
                        : null
                    }
                </div>
                <div className="font-size-small">
                    <span>Team consists of: </span>
                    <span className="link-like-text"
                        onClick={() => {
                            dispatch(setSelectedProject(project));
                            openTeamModal();
                        }}>
                        {project.employees.length} members
                    </span>
                </div>
            </div>
        </div>

        <div className="w-100 bottom-element pb-2">
            <div className="d-inline-block w-50 text-left pl-smaller">
                <Button className="button-red w-30 pt-1 pb-1 button-rectangular font-size-normal font-color-default" 
                    icon={<FontAwesomeIcon icon={faTrashAlt}/>} 
                    hide={project.status !== 'Completed'}
                    onClick={() => dispatch(deleteProjectAction(project.id))}
                />
            </div>
            <div className="d-inline-block w-50 text-right pr-smaller">
                <Button className="button-green w-100 pt-1 pb-1 button-rectangular font-size-normal font-color-default"
                    title="Start" 
                    hide={project.status !== 'On hold'}
                    onClick={() => dispatch(startProjectAction(project.id))}
                />
                <Button className="button-green w-100 pt-1 pb-1 button-rectangular font-size-normal font-color-default" 
                    title="Complete" 
                    hide={project.status !== 'In Progress'} 
                    onClick={() => {
                        dispatch(setSelectedProject(project))
                        onComplete();
                    }}
                />
            </div>
        </div>
    </>
};

export default ProjectCardContent;