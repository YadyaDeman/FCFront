// import React, { useState } from 'react';
// import TaskForm from './TaskForm';

// const CalendarPage = () => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (task) => {
//     setTasks([...tasks, task]);  
//   };

//   return (
//     <div>
//       <h1 sx={{ color: 'red' }}>My Calendar</h1>
//       <TaskForm onAddTask={addTask} />
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task.name}: {task.description}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CalendarPage;