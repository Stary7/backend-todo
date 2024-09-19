// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { getTasks, createTask, updateTask, deleteTask,getCompletedTasks } = require('../controllers/taskController');

// @route GET /tasks
// @desc Get all tasks for the authenticated user
// @access Private
router.get('/tasks', authMiddleware, getTasks);

// @route POST /tasks
// @desc Create a new task for the authenticated user
// @access Private
router.post('/tasks', authMiddleware, createTask);

// @route PUT /tasks/:id
// @desc Update a task by ID
// @access Private
router.put('/tasks/:id', authMiddleware, updateTask);

// @route DELETE /tasks/:id
// @desc Delete a task by ID
// @access Private
router.delete('/tasks/:id', authMiddleware, deleteTask);
router.get('/completed', authMiddleware, getCompletedTasks);
module.exports = router;
