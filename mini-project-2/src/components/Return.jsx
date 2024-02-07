import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Return = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Outlet />
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Return;
