import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task"; // Import task icon

const TasksPage = () => {
  return (
    <Box display="flex" justifyContent="center" mt={8}>
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 500, textAlign: "center" }}>
        <TaskIcon color="secondary" sx={{ fontSize: 50 }} />
        <Typography variant="h5" gutterBottom>
          My Tasks
        </Typography>
        <Typography variant="body1">
          Track and manage your tasks efficiently.
        </Typography>
      </Paper>
    </Box>
  );
};

export default TasksPage;
