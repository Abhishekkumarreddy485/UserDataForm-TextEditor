import React from "react";
import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  const data = { labels: ["Users", "Admins"], datasets: [{ label: "Roles", data: [50, 10], backgroundColor: "blue" }] };
  return <Bar data={data} />;
};
export default Dashboard;