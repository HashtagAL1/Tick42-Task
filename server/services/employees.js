const fs = require('fs');
const shortid = require('shortid');
const { getDbCollection, setDbCollection } = require('./shared');

const extractEmployees = () => {
    try {
        const rawEmployees = getDbCollection('employees');
        if (Object.keys(rawEmployees).length === 0) {
            throw new Error('ISE');
        } else {
            return rawEmployees.employees;
        }
    } catch(e) {
        throw new Error('ISE');
    }
};

const getEmployeeById = (id) => {
    const employees = extractEmployees();
    const targetEmployee = employees.find(e => e.id === id);
    if (!targetEmployee) {
        throw new Error('NOT_FOUND_EMPL');
    } else {
        return targetEmployee;
    }
};

const addEmployee = (employee) => {
    const employees = extractEmployees();
    if (isEmployeeExisting(employee, employees)) {
        throw new Error('DUPL_EMPL')
    } else {
        const newEmployee = {...employee, 
            name: `${employee.firstName} ${employee.lastName}`, 
            id: shortid.generate()
        };

        employees.push(newEmployee);
        setDbCollection('employees', employees);
        return newEmployee;
    }
};

const editEmployee = (newEmployee) => {
    const employees = extractEmployees();
    const targetEmployeeIndex = employees.findIndex(e => e.id === newEmployee.id);

    if(targetEmployeeIndex < 0) {
        throw new Error('NOT_FOUND_EMPL')
    } else {
        employees[targetEmployeeIndex] = {...employees[targetEmployeeIndex], ...newEmployee};
        setDbCollection('employees', employees);
        return employees[targetEmployeeIndex];
    }
};

const deleteEmployee = (employeeId) => {
    const employees = extractEmployees();
    const filteredEmployees = employees.filter(e => e.id !== employeeId);
    if (employees.length === filteredEmployees.length) {
        throw new Error('NOT_FOUND_EMPL')
    } else {
        setDbCollection('employees', filteredEmployees);
        return null;
    }
};

const isEmployeeExisting = (targetEmployee, employees) => {
    return employees.filter(e => e.firstName === targetEmployee.firstName && e.lastName === targetEmployee.lastName).length > 0;
};

module.exports = {
    extractEmployees,
    addEmployee,
    editEmployee,
    deleteEmployee,
    getEmployeeById
}