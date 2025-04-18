// src/App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import "./firebaseConfig"; // Just to initialize Firebase

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
