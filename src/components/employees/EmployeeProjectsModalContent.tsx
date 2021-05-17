import React from 'react';
import { useSelector } from 'react-redux';
import { IEmployee } from '../../types/employeeTypes';
import { IRootState } from '../../types/reducerTypes';
import ModalList from '../shared/ModalList';

const EmployeeProjectsModalContent: React.FC = () => {
    const selectedEmployee = useSelector<IRootState, IEmployee | null>(state => state.employees.selectedEmployee);

    if(!selectedEmployee) return null;

    return <ModalList collection={selectedEmployee.projects} 
        title={`${selectedEmployee.name}'s active projects`}
        noDataText={`${selectedEmployee.name} has 0 active projects`}
    />
};

export default EmployeeProjectsModalContent;