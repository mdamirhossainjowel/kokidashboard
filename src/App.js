import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./content/Dashboard";
import DashboardAnalytics from "./content/Dashbord/DashboardAnalytics";
import Analytics from "./content/Analytics/Analytics";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="analytics" element={<Analytics />}></Route>
          <Route path="/" element={<DashboardAnalytics />}></Route>
          <Route path="dashboard" element={<DashboardAnalytics />}></Route>
        </Route>
      </Routes>   
    </div>
  );
}

export default App;
