import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const TaskList = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = React.useState("");
  const [editingTask, setEditingTask] = React.useState(null);

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const newTaskObj = { id: tasks.length + 1, name: newTask, completed: false };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  };

  const handleEditTask = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    if (taskToEdit) setEditingTask(taskToEdit);
  };

  const handleSaveTask = () => {
    setTasks(tasks.map(task => (task.id === editingTask.id ? editingTask : task)));
    setEditingTask(null);
  };

  const handleChange = (e) => {
    editingTask
      ? setEditingTask({ ...editingTask, name: e.target.value })
      : setNewTask(e.target.value);
  };

  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <Box mt={2}>
      <Typography variant="h6" sx={{ color: 'red', fontSize: '18px' }}>Tasks</Typography>

      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <TextField
          label="New Task"
          variant="outlined"
          size="small"
          value={newTask}
          onChange={handleChange}
          sx={{ width: '450px' }}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleAddTask}
          sx={{ minWidth: '90px', fontSize: '12px' }}
        >
          Add Task
        </Button>
      </Box>

      <ul style={{ paddingLeft: '20px' }}>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: '8px' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(task.id)}
              style={{ marginRight: '8px' }}
            />
            {editingTask && editingTask.id === task.id ? (
              <Box display="flex" alignItems="center" gap={1}>
                <TextField
                  value={editingTask.name}
                  onChange={handleChange}
                  size="small"
                  sx={{ flexGrow: 1 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={handleSaveTask}
                  sx={{ fontSize: '12px' }}
                >
                  Save
                </Button>
              </Box>
            ) : (
              <Box display="inline-flex" alignItems="center">
                <Typography variant="body2" sx={{ fontSize: '14px' }}>
                  {task.name}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => handleEditTask(task.id)}
                  sx={{ marginLeft: '6px', padding: '2px 6px', fontSize: '12px', textTransform: 'none' }}
                >
                  Edit
                </Button>
              </Box>
            )}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default TaskList;
