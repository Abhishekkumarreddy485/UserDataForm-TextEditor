import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    login({ name: "User" });
    navigate("/dashboard");
  };
  // Needs to conform
  return <button onClick={handleLogin}>Login</button>;
};
export default Login;