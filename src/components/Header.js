import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <h1>🌱 CO₂ Tracker Dashboard</h1>
      <p>Monitor your digital carbon footprint in real-time</p>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#ffffff',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }
};

export default Header;
