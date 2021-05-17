const fs = require('fs');
const path = require('path');
const { extractEmployees, addEmployee, editEmployee, deleteEmployee } = require('../services/employees');
const { mapErrorMsgToResponse } = require('../services/shared');

const router = require('express').Router();

const getEmployeeActiveProjects = (projects, employeeId) => {
    let result = projects.filter(p => p.employees.indexOf(employeeId) > -1 && p.status === 'In Progress');

    result = result.map(p => p.name);
    
    return result;
};

router.get('/all', (req, res) => {
    setTimeout(() => {
        try {
            const employees = extractEmployees();
            const projects = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/projects.json')));
            for (let e of employees) {
                e.projects = getEmployeeActiveProjects(projects.projects, e.id)
            }
            return res.status(200).json({
                msg: 'Employees fetched successfully',
                employees: employees
            })
        } catch(e) {
            const error = mapErrorMsgToResponse(e.message);
            return res.status(error.status).json({ msg: error.msg });
        }
    }, 1000)
});

router.post('/add', (req, res) => {
    const { employee } = req.body;

    setTimeout(() => {
        try {
            const newEmployee = addEmployee(employee);
            return res.status(200).json({
                msg: 'Employee added successfully',
                employee: newEmployee
            })
        } catch(e) {
            const error = mapErrorMsgToResponse(e.message);
            return res.status(error.status).json({ msg: error.msg });
        }
    }, 1000)
});

router.post('/edit', (req, res) => {
    const { employee } = req.body;

    setTimeout(() => {
        try {
            const editedEmployee = editEmployee(employee);
            return res.status(200).json({
                msg: 'Employee edited successfully',
                employee: editedEmployee
            })
        } catch(e) {
            const error = mapErrorMsgToResponse(e.message);
            return res.status(error.status).json({ msg: error.msg });
        }
    }, 1000)
});

router.delete('/:id', (req, res) => {
    const employeeId = req.params.id;

    setTimeout(() => {
        try {
            deleteEmployee(employeeId);
            return res.status(200).json({
                msg: 'Employee deleted successfully',
                employeeId
            })
        } catch(e) {
            const error = mapErrorMsgToResponse(e.message);
            return res.status(error.status).json({ msg: error.msg });
        }
    }, 1000)
});

module.exports = router;