import React, { useState } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box, TextField } from "@mui/material";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Select date"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default Calendar;
