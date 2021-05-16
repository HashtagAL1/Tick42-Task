import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProjectAction, startProjectAction } from '../../redux/actions/project-actions/actions';
import { IProject } from '../../types/projectTypes';
import Button from '../shared/Button';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import CompleteProjectAlertContent from './CompleteProjectAlertContent';

const Alert = withReactContent(Swal);

interface IProps {
    project: IProject
}

const ProjectCardContent: React.FC<IProps> = ({ project }) => {
    const dispatch = useDispatch();
    const [statusClassName, setStatusClassName] = useState<string>('');

    const [isCompleteAlertDisplayed, setIsCompleteAlertDisplayed] = useState<boolean>(false);

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

    useEffect(() => {
        if(isCompleteAlertDisplayed) {
            Alert.fire({
                showCancelButton: false,
                showConfirmButton: false,
                showCloseButton: true,
                customClass: {
                    htmlContainer: 'mt-smallest',
                    popup: 'w-60'
                },
                html: <CompleteProjectAlertContent close={Alert.close} />
            })
        }
    }, [isCompleteAlertDisplayed])

    return <>
        <div className="w-100 h-100">
            <div className={`w-100 ${statusClassName}`}>
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
                        {project.expectedRevenue.toFixed(2)}$
                    </span>
                </div>
                <div className="font-size-small">
                    <span className="font-size-small">Earned revenue: </span>
                    <span className="font-color-gray font-weight-bold font-size-normal">
                        {project.revenue !== null ? `${project.revenue.toFixed(2)}$` : '-'}
                    </span>
                    {project.revenue !== null ? 
                        <i className={`ml-smaller arrow ${project.revenue >= project.expectedRevenue ? 'arrow-up': 'arrow-down'}`}></i> 
                        : null
                    }
                </div>
                <div className="font-size-small">
                    Team consists of <span className="link-like-text">{project.employees.length} members</span>
                </div>
            </div>
        </div>

        <div className="w-100 bottom-element pb-2">
            <div className="d-inline-block w-50 text-left pl-smaller">
                <Button className="button-red pt-1 pb-1 button-rectangular font-size-normal font-color-default font-weight-bold" 
                    title="Delete" 
                    hide={project.status !== 'Completed'}
                    onClick={() => dispatch(deleteProjectAction(project.id))}
                />
            </div>
            <div className="d-inline-block w-50 text-right pr-smaller">
                <Button className="button-green pt-1 pb-1 button-rectangular font-size-normal font-color-default font-weight-bold"
                    title="Start" 
                    hide={project.status !== 'On hold'}
                    onClick={() => dispatch(startProjectAction(project.id))}
                />
                <Button className="button-green pt-1 pb-1 button-rectangular font-size-normal font-color-default font-weight-bold" 
                    title="Complete" 
                    hide={project.status !== 'In Progress'} 
                    onClick={() => setIsCompleteAlertDisplayed(true)}
                />
            </div>
        </div>
    </>
};

export default ProjectCardContent;