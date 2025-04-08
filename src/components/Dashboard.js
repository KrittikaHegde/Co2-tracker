// src/components/Dashboard.js
import React from "react";
import CO2Stats from "./CO2Stats";
import Gamification from "./Gamification"; // If you have a Gamification component

function Dashboard() {
  return (
    <div style={styles.container}>
      <CO2Stats />
      <Gamification />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

export default Dashboard;
