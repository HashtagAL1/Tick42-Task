import React from 'react';
import { IEmployee } from '../../types/employeeTypes';
import Button from '../shared/Button';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProps {
    employees: IEmployee[],
    isEditable?: boolean,
    dispatch?: any,
    actionType?: string
}

const EmployeeModalList: React.FC<IProps> = ({ employees, isEditable, actionType, dispatch }) => {

    return <div className="w-100 pt-2">
        <div className="w-100 font-size-heading font-weight-bold font-color-gray text-center">
            Team members
        </div>

        {employees.length === 0 
        ? <div className="w-100 font-color-gray font-size-small text-center">No team members</div>
        : null
        }

        {employees.map((e) => {
            return <div className="w-100 pt-2 pb-2 employee-list-modal-item" key={e.id}>
                <div className="d-inline-block w-75">{e.name}</div>

                {isEditable 
                ?<div className="d-inline-block w-25 text-center">
                    <Button className="w-30 pt-1 pb-1 button-red button-rectangular font-size-normal font-color-default font-weight-bold"
                        icon={<FontAwesomeIcon icon={faTrashAlt}/>}
                        onClick={() => dispatch({ type: actionType, payload: e })}
                    />
                </div> 
                : null}
            </div>
        })}
    </div>
};

export default EmployeeModalList;