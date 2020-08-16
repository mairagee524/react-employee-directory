
const express = require('express');

const EmployeeCtrl = require('../controllers/employee');

const router = express.Router();

router.post('/employee', EmployeeCtrl.createEmployee)
router.put('/employee/:id', EmployeeCtrl.updateEmployee)
router.delete('/employee/:id', EmployeeCtrl.deleteEmployee)
router.get('/employee/:id', EmployeeCtrl.getEmployeeById)
router.get('/employee', EmployeeCtrl.getEmployees)

module.exports = router;