import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployeeAction } from '../../redux/actions/employee-actions/actions';
import Button from '../shared/Button';
import Input from '../shared/Input';

const AddEmployeeForm: React.FC = () => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    const submit = () => {
        dispatch(addEmployeeAction({ firstName, lastName }));
        setFirstName('');
        setLastName('');
    };

    return <div className="w-100">
        <h5 className="w-100 text-center font-color-gray font-weight-bold">Add Employee</h5>
        <div className="pl-small pr-small">
            <label className="font-color-gray font-size-normal font-weight-bold" htmlFor="firstNameInput">First Name:</label>
            <Input className="w-100" 
                type="text" 
                id="firstNameInput" 
                placeholder="First name..." 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
            />
        </div>

        <div className="pl-small pr-small pt-2">
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
            <Button className="w-50 button-green button-rectangular pt-1 pb-1 font-color-default font-size-normal" 
                title="Add" 
                disabled={!firstName || !lastName}
                onClick={submit}
            />
        </div>
    </div>
};

export default AddEmployeeForm;