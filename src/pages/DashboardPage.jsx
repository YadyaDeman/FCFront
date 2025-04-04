import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, Paper, Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat"; // Importing Chat icon
import SettingsIcon from "@mui/icons-material/Settings"; // Importing Settings icon
import TaskIcon from "@mui/icons-material/Task"; // Importing Task icon
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"; // Importing Calendar icon
import ExitToAppIcon from "@mui/icons-material/ExitToApp"; // Importing Logout icon

const DashboardPage = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from local storage
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <Box display="flex" justifyContent="center" mt={8}>
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 500 }}>
        {/* Page title */}
        <Typography variant="h5" textAlign="center" gutterBottom>
          Welcome to Famchatter
        </Typography>

        {/* List of sections in the dashboard */}
        <List>
          {/* Chats Section */}
          <ListItem button component={Link} to="/chats">
            <ListItemIcon>
              <ChatIcon color="primary" /> {/* Chat icon */}
            </ListItemIcon>
            <ListItemText primary="Chats" /> {/* Label for the section */}
          </ListItem>

          {/* My Tasks Section */}
          <ListItem button component={Link} to="/tasks">
            <ListItemIcon>
              <TaskIcon color="secondary" /> {/* Task icon */}
            </ListItemIcon>
            <ListItemText primary="My Tasks" /> {/* Label for the section */}
          </ListItem>

          {/* Calendar Section */}
          <ListItem button component={Link} to="/calendar">
            <ListItemIcon>
              <CalendarTodayIcon color="success" /> {/* Calendar icon */}
            </ListItemIcon>
            <ListItemText primary="Calendar" /> {/* Label for the section */}
          </ListItem>

          {/* Settings Section */}
          <ListItem button component={Link} to="/settings">
            <ListItemIcon>
              <SettingsIcon color="action" /> {/* Settings icon */}
            </ListItemIcon>
            <ListItemText primary="Settings" /> {/* Label for the section */}
          </ListItem>
        </List>

        {/* Logout Button */}
        <Button
          fullWidth
          variant="contained"
          color="error"
          sx={{ mt: 3 }}
          startIcon={<ExitToAppIcon />} // Logout icon
          onClick={handleLogout} // Trigger logout function on click
        >
          Logout
        </Button>
      </Paper>
    </Box>
  );
};

export default DashboardPage;
