import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import ProjectList from './ProjectList'
import Calendar from './Calendar';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (task) => {
    setTasks([...tasks, task]);  
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
        Welcome to My Calendar Page
      </Typography>

      {/* Calendar */}
      <Box mb={4}>
        <Calendar />
      </Box>

      <Box mb={4}>
        <Typography variant="h6" sx={{ color: 'red' }}>Add a Task</Typography>
        <TaskForm onAddTask={addTask} />
      </Box>

      {/* Task List */}
      <Box mb={4}>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </Box>

      {/* ProjectList */}
      <Box>
        <ProjectList />
      </Box>
    </Box>
  );
};

export default HomePage;
