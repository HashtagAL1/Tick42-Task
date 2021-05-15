import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../types/reducerTypes';

interface IProps {
    
}

const ProjectStatusFilter: React.FC = () => {
    const statuses = useSelector<IRootState, string[]>(state => state.projects.statuses);
    const selectedStatus = useSelector<IRootState, string>(state => state.projects.selectedStatus);

    return <div className="d-inline">
        {statuses.map((s, i) => {
            return <div key={s} 
                className={`filter-box bg-gray font-color-default d-inline-block text-center font-size-normal ${selectedStatus === s ? 'active' : ''}`}>
                    {s}
                </div>
        })}
    </div>
};

export default ProjectStatusFilter;