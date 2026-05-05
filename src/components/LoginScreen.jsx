import React, { useState } from 'react';
import './LoginScreen.css';

const LoginScreen = ({ onLogin }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (day && month) {
      onLogin(parseInt(day), parseInt(month));
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="tooth-icon">🦷</div>
          <h1>🎂 Happy Birthday 🎂</h1>
          <p>Enter your birthday to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="date-inputs">
            <div className="input-group">
              <label>Day</label>
              <input
                type="number"
                min="1"
                max="31"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="date-input"
                required
              />
            </div>

            <span className="slash">/</span>

            <div className="input-group">
              <label>Month</label>
              <input
                type="number"
                min="1"
                max="12"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="date-input"
                required
              />
            </div>
          </div>

          <button type="submit" className="login-button">
           💖 Enter 💖
          </button>
        </form>


        <div className="stars"></div>
      </div>
    </div>
  );
};

export default LoginScreen;