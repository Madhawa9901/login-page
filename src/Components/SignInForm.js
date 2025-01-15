import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import "../Styles/Login.css";
import { registerUser } from "../Utills/SignInAPI";

const SignInForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "", confirmPassword: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await registerUser(credentials);
    
        if (result.success) {
            setMessage(result.message);
        } else {
            setMessage(result.message);
        }
  };

  return (
    <Box className="login-container">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />        
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        <Button variant="contained" type="submit" fullWidth>
           Sign In
        </Button>
      </form>
      {message && <p>{message}</p>}
    </Box>
  );
};

export default SignInForm;
