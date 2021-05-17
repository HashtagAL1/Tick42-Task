import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { IProject } from '../../types/projectTypes';
import Input from '../shared/Input';
import Button from '../shared/Button';
import { addProjectAction } from '../../redux/actions/project-actions/actions';
import EmployeeSearchSelect from '../employees/EmployeesSearchSelect';
import ModalList from '../shared/ModalList';

const initState: IProject = {
    name: '',
    expectedRevenue: 0,
    employees: [],
    revenue: null,
    status: '',
    id: ''
};

const addFormReducer = (state = initState, action:any): IProject => {
    switch(action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'SET_EXPECTED_REVENUE':
            return {
                ...state,
                expectedRevenue: Number(action.payload)
            }
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }
        case 'REMOVE_EMPLOYEE':
            return {
                ...state,
                employees: [...state.employees.filter(e => e.id !== action.payload.id)]
            }
        default: return state;
    }
};

const AddProjectModalContent: React.FC = () => {

    const dispatch = useDispatch();
    const [formData, localDispatch] = useReducer(addFormReducer, initState);

    const isFormInvalid = (): boolean => {
        return formData.employees.length === 0 || !formData.expectedRevenue || !formData.name
    };

    return <div className="">
            <div className="w-100">
                <div className="d-inline-block w-60">
                    <label className="d-block font-weight-bold font-color-gray" htmlFor="projectNameInput">Project name:</label>
                    <Input type="text" 
                        placeholder="Project name..." 
                        className="w-100" 
                        id="projectNameInput" 
                        value={formData.name} 
                        onChange={(e) => localDispatch({ type: 'SET_NAME', payload: e.target.value })}
                    />
                </div>
                <div className="d-inline-block w-40 pl-small">
                    <label className="d-block font-weight-bold font-color-gray" htmlFor="expectedRevenueInput">Expected revenue:</label>
                    <Input type="number" 
                        placeholder="Exp. revenue" 
                        className="w-100" 
                        id="expectedRevenueInput" 
                        value={formData.expectedRevenue} 
                        onChange={(e) => localDispatch({ type: 'SET_EXPECTED_REVENUE', payload: e.target.value })}/>
                </div>
            </div>

            <EmployeeSearchSelect teamMembers={formData.employees} 
                shouldDisplay={true} 
                shouldResetEmployees={true}
                outerDispatch={localDispatch}
            />
            
            <ModalList collection={formData.employees}
                noDataText="No team members"
                title="Team members"
                dispatch={localDispatch}
                isEditable={true}
                actionType="REMOVE_EMPLOYEE"
            />

            <div className="w-100 pt-3 pb-1 text-right">
                <Button className="w-30 pt-1 pb-1 button-green button-rectangular font-color-default font-size-large"
                    title="Add" 
                    disabled={isFormInvalid()}
                    onClick={() => {
                        dispatch(addProjectAction(formData))
                    }}
                />
            </div>
            
        </div>
};

export default AddProjectModalContent;