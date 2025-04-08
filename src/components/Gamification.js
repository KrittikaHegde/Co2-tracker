// src/components/Gamification.js
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebaseConfig";

const Gamification = () => {
  const [data, setData] = useState({
    badges: "None",
    leaderboard: "--"
  });

  useEffect(() => {
    const dataRef = ref(database, "co2-data/");
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const val = snapshot.val();
      if (val) {
        setData({
          badges: val.badges || "None",
          leaderboard: val.leaderboard || "--"
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>🎮 Gamification Zone</h2>
      <p>🏆 Badges Earned: {data.badges}</p>
      <p>📊 Leaderboard Position: #{data.leaderboard}</p>
    </div>
  );
};

export default Gamification;
