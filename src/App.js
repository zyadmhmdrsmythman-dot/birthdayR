import React, { useState } from 'react';
import './App.css';
import LoginScreen from './components/LoginScreen';
import BirthdayCard from './components/BirthdayCard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const correctBirthday = { day: 14, month: 5 };

  const handleLogin = (day, month) => {
    if (day === correctBirthday.day && month === correctBirthday.month) {
      setIsLoggedIn(true);
      setTimeout(() => setShowCard(true), 1000); // تأخير للتأثير
    } else {
      alert('Incorrect birthday! Try again 😊');
    }
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  if (!showCard) {
    return (
      <div className="loading-screen">
        <div className="loading-heart">💖</div>
        <h2>Dowenload... 🎉</h2>
        <p>Happy Birthday my Doctor! 🦷✨</p>
      </div>
    );
  }

  return <BirthdayCard />;
}

export default App;