import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployeeAction, getEmployeesAction, resetEmployeesAction, setSelectedEmployee } from '../../redux/actions/employee-actions/actions';
import { IEmployee } from '../../types/employeeTypes';
import { IRootState } from '../../types/reducerTypes';
import styles from '../../utils/tableStyles';
import Button from '../shared/Button';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../shared/Modal';
import EmployeeProjectsModalContent from './EmployeeProjectsModalContent';
import EditEmployeeForm from './EditEmployeeForm';

const EmployeesTable: React.FC = () => {
    const dispatch = useDispatch();
    const employees = useSelector<IRootState, IEmployee[]>(state => state.employees.employees);

    const [isProjectsModalOpen, setIsProjectsModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

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
            selector: (row:any, index: number) => <div className="link-like-text" onClick={() => openProjectsModal(row)}>
                {row.projects.length} Projects
            </div>,
            center: true 
        },
        { 
            name: 'Actions', 
            selector: '', 
            center: true, 
            cell: (row:any) => <div className="w-100 text-center">
                <Button className="w-15 button-red pt-1 pb-1 button-rectangular font-size-normal font-color-default" 
                    icon={<FontAwesomeIcon icon={faTrashAlt}/>}
                    onClick={() => dispatch(deleteEmployeeAction(row.id))}
                />

                <Button className="w-15 button-blue ml-small pr-smallest pt-1 pb-1 button-rectangular font-size-normal font-color-default"
                    icon={<FontAwesomeIcon icon={faEdit}/>}
                    onClick={() => openEditModal(row)}
                />
            </div>
        }
    ];

    const openProjectsModal = (employee: IEmployee) => {
        dispatch(setSelectedEmployee(employee));
        setIsProjectsModalOpen(true);
    };

    const openEditModal = (employee: IEmployee) => {
        dispatch(setSelectedEmployee(employee));
        setIsEditModalOpen(true);
    };

    const closeModal = () => {
        setIsProjectsModalOpen(false);
        setIsEditModalOpen(false);
        dispatch(setSelectedEmployee(null));
    };

    useEffect(() => {
        dispatch(getEmployeesAction());

        return () => {
            dispatch(resetEmployeesAction());
        };
    }, [dispatch]);

    return <div className="w-100 h-100">

        <Modal isOpen={isProjectsModalOpen} className="" title="Active projects" onClose={closeModal}>
            <EmployeeProjectsModalContent />
        </Modal>

        <Modal isOpen={isEditModalOpen} className="" title="Edit employee" onClose={closeModal}>
            <EditEmployeeForm onSubmit={closeModal}/>
        </Modal>

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