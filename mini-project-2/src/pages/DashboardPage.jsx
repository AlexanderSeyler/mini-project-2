import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Sidebar from "../components/SideBar";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          style={{ left: 0, right: 0, width: "100%", zIndex: 1000 }}
        >
          <Toolbar>
            <Sidebar />
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
            ></Box>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </div>
    </div>
  );
};

export default Dashboard;
