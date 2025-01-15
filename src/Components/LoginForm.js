import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import "../Styles/Login.css";
import { useAuthStore } from "../State/AuthStore";
import { authenticateUser } from "../Utills/LoginAPI";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { setFlowState } = useAuthStore();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFlowState({ status: "sending", credentials });

    const result = await authenticateUser(credentials);

    if (result.success) {
      setFlowState({ status: "success", token: result.token, message: result.message });
      setMessage(result.message);
    } else {
      setFlowState({ status: "failure", message: result.message });
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
        <Button variant="contained" type="submit" fullWidth>
          Login
        </Button>
      </form>
      {message && <p>{message}</p>}
    </Box>
  );
};

export default LoginForm;
