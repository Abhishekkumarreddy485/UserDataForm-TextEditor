import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import Counter from "../components/counter"; 
import "./Dashboard.css"; // Import styling

const userData = [
  { month: "Jan", users: 200 },
  { month: "Feb", users: 300 },
  { month: "Mar", users: 450 },
  { month: "Apr", users: 600 },
  { month: "May", users: 750 },
  { month: "Jun", users: 900 },
];

const Dashboard = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="dashboard-container">
      <h1>📊 Dashboard</h1>

      {/* Counter Section */}
      {/* <div className="counter-section">
        <h2>Counter</h2>
        <Counter />
      </div> */}

      {/* User Profile Trends Chart */}
      <div className="chart-section">
        <h2>User Profile Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={userData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="users" fill="#007bff" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
