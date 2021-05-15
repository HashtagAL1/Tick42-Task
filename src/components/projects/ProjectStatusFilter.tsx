import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProjectStatusAction } from '../../redux/actions/project-actions/actions';
import { IRootState } from '../../types/reducerTypes';

const ProjectStatusFilter: React.FC = () => {
    const dispatch = useDispatch();
    const statuses = useSelector<IRootState, string[]>(state => state.projects.statuses);
    const selectedStatus = useSelector<IRootState, string>(state => state.projects.selectedStatus);

    return <div className="d-inline">
        {statuses.map((s, i) => {
            return <div key={s} onClick={() => dispatch(setSelectedProjectStatusAction(s))}
                className={`filter-box bg-gray font-color-default d-inline-block text-center font-size-normal ${selectedStatus === s ? 'active' : ''}`}>
                    {s}
                </div>
        })}
    </div>
};

export default ProjectStatusFilter;