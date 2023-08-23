import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Profile from './components/profile';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const handleProfileClick = () => {
    setShowProfile(true);
  };

    return (
      <div className="App">
        <Header onProfileClick={handleProfileClick} />
        {showProfile ? <Profile /> : null}
      </div>
    );
  }export default App;
