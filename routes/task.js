const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/tasks', authMiddleware, getTasks);
router.post('/tasks', authMiddleware, createTask);
router.put('/tasks/:id', authMiddleware, updateTask);
router.delete('/tasks/:id', authMiddleware, deleteTask);

module.exports = router;
