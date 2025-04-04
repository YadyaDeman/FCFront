import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings"; // Importing settings icon

const SettingsPage = () => {
  return (
    <Box display="flex" justifyContent="center" mt={8}>
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 500, textAlign: "center" }}>
        <SettingsIcon color="action" sx={{ fontSize: 50 }} />
        <Typography variant="h5" gutterBottom>
          Settings
        </Typography>
        <Typography variant="body1">
          Customize your preferences and account settings.
        </Typography>
      </Paper>
    </Box>
  );
};

export default SettingsPage;
