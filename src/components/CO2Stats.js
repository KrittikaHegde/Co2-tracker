// src/components/CO2Stats.js
import React, { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { ref, onValue } from "firebase/database";

const CO2Stats = () => {
  const [co2Data, setCO2Data] = useState(null);

  useEffect(() => {
    const co2Ref = ref(database, "trackerData/"); // Path to your Firebase node

    onValue(co2Ref, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCO2Data(data);
      } else {
        setCO2Data(null);
      }
    }, (error) => {
      console.error("Error fetching data:", error);
    });

  }, []);

  return (
    <div style={styles.container}>
      <h2>CO2 Tracker Stats</h2>
      {co2Data ? (
        <ul>
          <li>CPU Usage: {co2Data.cpuUsage} %</li>
          <li>Data Transfer: {co2Data.dataTransfer} GB</li>
          <li>Carbon Intensity: {co2Data.carbonIntensity} gCO2/kWh</li>
          <li>Badges: {co2Data.badges}</li>
          <li>Leaderboard Rank: {co2Data.leaderboard}</li>
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "300px",
    textAlign: "center",
    background: "#f9f9f9"
  }
};

export default CO2Stats;
