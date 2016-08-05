var express = require('express');
var router = express.Router();
var tasks = require('./task.js');


router.get('/api/getAllTask', tasks.getAllTasks);
router.get('/api/getTaskById/:taskId', tasks.getTaskById);

router.post('/api/addTask', tasks.addTask);

router.put('/api/editNameById/:taskId', tasks.editNameById);
router.put('/api/editDescById/:taskId', tasks.editDescById);
router.put('/api/editStatusById/:taskId', tasks.editStatusById);
router.put('/api/editTaskById/:taskId', tasks.editTaskById);

router.delete('/api/deleteTaskById/:taskId', tasks.deleteTaskById);

module.exports = router;