import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        padding: "10px",
        paddingRight: "100px",
      }}
    >
      <Outlet />
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default LoginComponent;
