import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";// Importing calendar icon

const CalendarPage = () => {
  return (
    <Box display="flex" justifyContent="center" mt={8}>
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 500, textAlign: "center" }}>
        <CalendarTodayIcon color="success" sx={{ fontSize: 50 }} />
        <Typography variant="h5" gutterBottom>
          Calendar
        </Typography>
        <Typography variant="body1">
          Plan and organize your schedule easily.
        </Typography>
      </Paper>
    </Box>
  );
};

export default CalendarPage;
