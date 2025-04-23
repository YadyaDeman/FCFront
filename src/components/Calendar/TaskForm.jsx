  import React, { useState } from 'react';
  
  const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { name: taskName, description: taskDescription };
    onAddTask(newTask); 
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;