import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editEmployeeAction } from '../../redux/actions/employee-actions/actions';
import { IEmployee } from '../../types/employeeTypes';
import { IRootState } from '../../types/reducerTypes';
import Button from '../shared/Button';
import Input from '../shared/Input';

interface IProps {
    onSubmit: () => void
}

const EditEmployeeForm: React.FC<IProps> = ({ onSubmit }) => {
    const dispatch = useDispatch();
    const selectedEmployee = useSelector<IRootState, IEmployee | null>(state => state.employees.selectedEmployee);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    const submit = () => {
        dispatch(editEmployeeAction({ ...selectedEmployee, firstName, lastName }));
        setFirstName('');
        setLastName('');
        onSubmit();
    };

    useEffect(() => {
        if(selectedEmployee) {
            setFirstName(selectedEmployee.firstName);
            setLastName(selectedEmployee.lastName);
        }
    }, [selectedEmployee]);

    return <div className="w-100">
        <div className="">
            <label className="font-color-gray font-size-normal font-weight-bold" htmlFor="firstNameInput">First Name:</label>
            <Input className="w-100" 
                type="text" 
                id="firstNameInput" 
                placeholder="First name..." 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
            />
        </div>

        <div className="pt-2">
            <label className="font-color-gray font-size-normal font-weight-bold" htmlFor="lastNameInput">Last Name:</label>
            <Input className="w-100" 
                type="text" 
                id="lastNameInput" 
                placeholder="Last name..." 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)}
            />
        </div>

        <div className="pl-small pr-small pt-2 text-center">
            <Button className="w-50 button-blue button-rectangular pt-1 pb-1 font-color-default font-size-normal" 
                title="Edit" 
                disabled={!firstName || !lastName}
                onClick={submit}
            />
        </div>
    </div>
};

export default EditEmployeeForm;