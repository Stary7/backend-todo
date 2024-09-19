const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createTask = async (req, res) => {
  const { title } = req.body;
  try {
    const task = new Task({ title, userId: req.user.id });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(id, { title, completed }, { new: true });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
