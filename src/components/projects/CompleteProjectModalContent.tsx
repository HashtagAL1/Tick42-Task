import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeProjectAction, setSelectedProject } from '../../redux/actions/project-actions/actions';
import { IProject } from '../../types/projectTypes';
import { IRootState } from '../../types/reducerTypes';
import Button from '../shared/Button';
import Input from '../shared/Input';

interface IProps {
    onConfirm: () => void
}

const CompleteProjectModalContent: React.FC<IProps> = ({ onConfirm }) => {
    const dispatch = useDispatch();
    const selectedProject = useSelector<IRootState, IProject | null>(state => state.projects.selectedProject);
    const [revenue, setRevenue] = useState<number | undefined>(0);

    return <div>
        <label htmlFor="revenue">Earned revenue:</label>
        <Input type="number" 
            id="revenue" 
            className="w-100" 
            value={revenue} 
            placeholder="Enter earned revenue" 
            onChange={(e) => setRevenue(Number(e.target.value))}
        />

        <div className="w-100 text-center pt-2 pb-1">
            <Button className="w-30 pt-1 pb-1 button-green button-rectangular font-color-default font-size-large" 
                title="Complete" 
                disabled={!revenue}
                onClick={() => {
                    dispatch(completeProjectAction({ id: selectedProject?.id, revenue }));
                    onConfirm();
                }} 
            />
        </div>
    </div>
};

export default CompleteProjectModalContent;