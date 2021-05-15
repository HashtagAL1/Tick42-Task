import React, { useEffect, useState } from 'react';
import { IProject } from '../../types/projectTypes';

interface IProps {
    project: IProject
}

const ProjectCardContent: React.FC<IProps> = ({ project }) => {
    const [statusClassName, setStatusClassName]: [string, (statusClassName: string) => void] = useState('');

    useEffect(() => {
        let className = '';
        switch(project.status) {
            case 'In Progress': className = 'bg-blue'; break;
            case 'On hold': className = 'bg-orange'; break;
            case 'Completed': className = 'bg-green'; break;
            default: className = '';
        }

        setStatusClassName(className);
    }, [project])

    return <>
        <div className="w-100 h-100 pl-small">
            <div className="w-100">
                <div className={`project-status-text font-size-normal mt-smaller ${statusClassName}`}>{project.status}</div>
            </div>

            <div className="mt-smaller font-color-gray font-weight-bold min-height-8vh">
                <div className="font-size-heading">{project.name}</div>
            </div>

            <div className="mt-small">
                <div className="font-color-gray font-style-italic font-weight-bold text-decoration-underline">Project details:</div>
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
            <div className="d-inline-block pl-smaller">
                <button>delete</button>
            </div>
            <div className="d-inline-block right-element pr-smaller">
                <button>start</button>
            </div>
        </div>
    </>
};

export default ProjectCardContent;