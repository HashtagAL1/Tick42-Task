import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesAction } from '../../redux/actions/employee-actions/actions';
import { IEmployee } from '../../types/employeeTypes';
import { IRootState } from '../../types/reducerTypes';
import styles from '../../utils/tableStyles';
import Button from '../shared/Button';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EmployeesTable: React.FC = () => {
    const dispatch = useDispatch();
    const employees = useSelector<IRootState, IEmployee[]>(state => state.employees.employees);

    const columns = [
        { 
            name: 'First Name', 
            selector: 'firstName', 
            center: true
        },
        { 
            name: 'Last Name', 
            selector: 'lastName', 
            center: true 
        },
        { 
            name: 'Active projects', 
            selector: (row:any, index: number) => row.projects.length,
            center: true 
        },
        { 
            name: 'Actions', 
            selector: '', 
            center: true, 
            cell: (row:any) => <Button className="w-20 button-red pt-1 pb-1 button-rectangular font-size-normal font-color-default" 
                    title="Remove" 
                    icon={<FontAwesomeIcon icon={faTrashAlt}/>}
                    onClick={() => {}}
                />
        }
    ];

    useEffect(() => {
        dispatch(getEmployeesAction());
    }, [dispatch]);

    return <div className="w-100 h-100">
        <DataTable data={employees} 
            columns={columns} 
            noHeader={true}
            highlightOnHover={true} 
            pagination={true}
            paginationPerPage={10}
            customStyles={styles}
        />
    </div>
};

export default EmployeesTable;