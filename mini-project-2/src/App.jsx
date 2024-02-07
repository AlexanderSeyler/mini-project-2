import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/DashboardPage";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppRoutes></AppRoutes>
      <Dashboard></Dashboard>
    </>
  );
}

export default App;
