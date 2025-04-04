import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import CloseIcon from '@mui/icons-material/Close';
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  IconButton,
  Checkbox,
  FormControlLabel
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import axios from "axios";

const RegisterPage = () => {
  // State to manage user input fields
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    isAdult: false, // Checkbox state
    profile_pic: "",
  });

  // State to store uploaded photo
  const [uploadPhoto, setUploadPhoto] = useState(null);
  const [message, setMessage] = useState(""); // State to store success/error messages

  // Function to handle input field changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (e) => {
    setData((prev) => ({
      ...prev,
      isAdult: e.target.checked,
    }));
  };

  // Function to handle file upload
  const handleUploadPhoto = (e) => {
    const file = e.target.files[0];
    setUploadPhoto(file);
  };

  // Function to clear uploaded photo
  const handleClearUploadPhoto = () => {
    setUploadPhoto(null);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!data.isAdult) {
      setMessage("You must confirm that you are at least 18 years old.");
      return;
    }

    try {
      const URL = `${import.meta.env.VITE_BACKEND}/auth/register`;

      await axios.post(URL, data); 

      setMessage("Registration successful! Please check your email."); // Success message
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed."); // Error message
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={8}>
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 400 }}>
        {/* Page title */}
        <Typography variant="h5" textAlign="center" gutterBottom>
          Welcome to Famchatter!
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Name input field */}
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            margin="normal"
            value={data.name}
            onChange={handleOnChange}
            required
          />

          {/* Email input field */}
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            margin="normal"
            value={data.email}
            onChange={handleOnChange}
            required
          />

          {/* Password input field */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            margin="normal"
            value={data.password}
            onChange={handleOnChange}
            required
          />

          {/* Checkbox for 18+ confirmation */}
          <FormControlLabel
            control={
              <Checkbox
                checked={data.isAdult}
                onChange={handleCheckboxChange}
                color="primary"
              />
            }
            label="I confirm that I am at least 18 years old"
          />

          {/* Profile picture upload */}
          <Box display="flex" alignItems="center" gap={2} mt={2}>
            <IconButton color="primary" component="label">
              <PhotoCamera />
              <input type="file" hidden onChange={handleUploadPhoto} />
            </IconButton>

            {uploadPhoto ? (
              <Box display="flex" alignItems="center" gap={1}>
                <Typography variant="body2">{uploadPhoto.name}</Typography>
                <IconButton color="error" onClick={handleClearUploadPhoto}>
                  <CloseIcon />
                </IconButton>
              </Box>
            ) : (
              <Typography variant="body2">Upload profile photo</Typography>
            )}
          </Box>

          {/* Register button */}
          <Button 
            fullWidth 
            variant="contained" 
            color="primary" 
            sx={{ mt: 3 }} 
            type="submit"
          >
            Register
          </Button>
        </form>

        {/* Display success/error message */}
        {message && (
          <Typography variant="body2" textAlign="center" color="error" mt={2}>
            {message}
          </Typography>
        )}

        {/* Link to login page */}
        <Typography variant="body2" textAlign="center" mt={2}>
          Already have an account?{" "}
          <Link to="/email" style={{ color: "blue", textDecoration: "none" }}>
            Login here
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
