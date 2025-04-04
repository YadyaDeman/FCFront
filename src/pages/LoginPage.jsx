import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate(); // Hook for navigation after login

  // State to store user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle input field changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const URL = `${import.meta.env.VITE_BACKEND}/auth/login`;


    try {
      const response = await axios.post(URL, { email, password });

      // If login is successful, store the token and navigate to the dashboard
      localStorage.setItem("token", response.data.token);
      setMessage("Login successful!");

      navigate("/dashboard"); // Redirect user after login

    } catch (error) {
      // Handle errors (e.g., wrong credentials)
      setMessage(error.response?.data?.message || "Login failed. Check your credentials.");
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={8}>
      <Paper elevation={3} sx={{ p: 4, width: "100%", maxWidth: 400 }}>
        {/* Page title */}
        <Typography variant="h5" textAlign="center" gutterBottom>
          Login to Your Account
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Email input field */}
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            margin="normal"
            value={email}
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
            value={password}
            onChange={handleOnChange}
            required
          />

          {/* Login button */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            type="submit"
          >
            Login
          </Button>
        </form>

        {/* Display error or success message */}
        {message && (
          <Typography variant="body2" textAlign="center" color="error" mt={2}>
            {message}
          </Typography>
        )}

        {/* Link to registration page */}
        <Typography variant="body2" textAlign="center" mt={2}>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "blue", textDecoration: "none" }}>
            Sign up here
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginPage;

