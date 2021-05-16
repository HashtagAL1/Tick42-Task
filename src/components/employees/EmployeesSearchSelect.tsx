import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { getEmployeesAction, resetEmployeesAction } from '../../redux/actions/employee-actions/actions';
import { IEmployee } from '../../types/employeeTypes';
import { IRootState } from '../../types/reducerTypes';
import { getEmployeeByName } from '../../utils/employeeUtils';

interface IProps {
    shouldDisplay?: boolean,
    teamMembers: IEmployee[],
    shouldResetEmployees: true,
    outerDispatch: any
}

const EmployeeSearchSelect: React.FC<IProps> = ({ shouldDisplay, teamMembers, shouldResetEmployees, outerDispatch }) => {
    const dispatch = useDispatch();
    const employees = useSelector<IRootState, IEmployee[]>(state => state.employees.employees);

    useEffect(() => {
        if(shouldDisplay) {
            dispatch(getEmployeesAction())
        }

        return () => {
            if(shouldResetEmployees) {
                dispatch(resetEmployeesAction());
            }
        };
    }, [dispatch])
    if(!shouldDisplay) return null;

    return <div className="w-100 pt-2">
        <SelectSearch options={employees}
            search
            filterOptions={fuzzySearch}
            placeholder="Enter employee name"
            className="custom-select-search"
            onChange={(name) => {
                const employee = getEmployeeByName(employees, name);
                if(employee && teamMembers.filter(e => e.id === employee.id).length === 0) {
                    outerDispatch({ type: 'ADD_EMPLOYEE', payload: employee })
                }
            }}
        />
    </div>
};

export default EmployeeSearchSelect;