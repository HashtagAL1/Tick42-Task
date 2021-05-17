import React, { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProjectTeamAction } from '../../redux/actions/project-actions/actions';
import { IEmployee } from '../../types/employeeTypes';
import { IProject } from '../../types/projectTypes';
import { IRootState } from '../../types/reducerTypes';
import EmployeeSearchSelect from '../employees/EmployeesSearchSelect';
import Button from '../shared/Button';
import ModalList from '../shared/ModalList';

interface IProps {
    onEdit: () => void
}

const initState: IEmployee[] = [];

const teamReducer = (state = initState, action: any) => {
    switch(action.type) {
        case 'ADD_EMPLOYEE':
            return [...state, action.payload]
        case 'REMOVE_EMPLOYEE':
            return [...state.filter(e => e.id !== action.payload.id)];
        case 'SET_TEAM':
            return [...action.payload];
        case 'RESET_TEAM':
            return [...initState];
        default: return state;
    }
};

const ProjectTeamModalContent: React.FC<IProps> = ({ onEdit }) => {
    const dispatch = useDispatch();
    const selectedProject = useSelector<IRootState, IProject | null>(state => state.projects.selectedProject);
    const [teamMembers, localDispatch] = useReducer(teamReducer, initState);

    useEffect(() => {
        if(selectedProject) {
            localDispatch({ type: 'SET_TEAM', payload: selectedProject.employees })
        }
    }, [selectedProject, localDispatch]);

    return <div className="w-100">

        <EmployeeSearchSelect teamMembers={teamMembers} 
            shouldDisplay={selectedProject?.status !== 'Completed'} 
            shouldResetEmployees={true}
            outerDispatch={localDispatch}
        />

        <ModalList collection={teamMembers}
            noDataText="No team members"
            title="Team members" 
            actionType="REMOVE_EMPLOYEE" 
            isEditable={selectedProject?.status !== 'Completed'}
            dispatch={localDispatch}
        />

        {selectedProject?.status !== 'Completed' 
        ? <div className="w-100 pt-3 pb-1 text-right">
            <Button className="w-30 pt-1 pb-1 button-green button-rectangular font-color-default font-size-large"
                title="Edit team" 
                onClick={() => {
                    dispatch(editProjectTeamAction({ projectId: selectedProject?.id, team: teamMembers }));
                    onEdit()
                }}
            />
        </div>
        : null}

        
    </div>
};

export default ProjectTeamModalContent;