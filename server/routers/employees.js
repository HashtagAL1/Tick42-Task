const { extractEmployees, addEmployee, editEmployee, deleteEmployee } = require('../services/employees');
const { mapErrorMsgToResponse } = require('../services/shared');
const { route } = require('./projects');

const router = require('express').Router();

router.get('/all', (req, res) => {
    try {
        const employees = extractEmployees();
        return res.status(200).json({
            msg: 'Employees fetched successfully',
            employees: employees
        })
    } catch(e) {
        const error = mapErrorMsgToResponse(e.message);
        return res.status(error.status).json({ msg: error.msg });
    }
});

router.post('/add', (req, res) => {
    const emp = req.body;

    try {
        const newEmployee = addEmployee(emp);
        return res.status(200).json({
            msg: 'Employee added successfully',
            employee: newEmployee
        })
    } catch(e) {
        const error = mapErrorMsgToResponse(e.message);
        return res.status(error.status).json({ msg: error.msg });
    }
});

router.post('/edit', (req, res) => {
    const newEmployee = req.body;

    try {
        const editedEmployee = editEmployee(newEmployee);
        return res.status(200).json({
            msg: 'Employee edited successfully',
            employee: editEmployee
        })
    } catch(e) {
        const error = mapErrorMsgToResponse(e.message);
        return res.status(error.status).json({ msg: error.msg });
    }
});

router.delete('/:id', (req, res) => {
    const employeeId = req.params.id;

    try {
        deleteEmployee(employeeId);
        return res.status(200).json({
            msg: 'Employee deleted successfully'
        })
    } catch(e) {
        const error = mapErrorMsgToResponse(e.message);
        return res.status(error.status).json({ msg: error.msg });
    }
});

module.exports = router;