import React from 'react';
import { useDispatch } from 'react-redux';
import EmployeesTable from '../employees/EmployeesTable';

const EmployeeList: React.FC = () => {
    const dispatch = useDispatch();

    return <div className="main-content flex-direction-row">
        <div className="flex-20 flex-centered-content">content</div>
        <div className="flex-80 flex-centered-content">
            <EmployeesTable />
        </div>
    </div>
};

export default EmployeeList;