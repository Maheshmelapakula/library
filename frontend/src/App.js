// App.js
import React, { useState } from 'react';
import HomeContainer from './components/home/HomeContainer';
import AuthContainer from './components/auth/AuthContainer';

const App = () => {
  const [showAuth, setShowAuth] = useState(false)

  const handleRegisterClick = () => {
    setShowAuth(true);
  };

  const handleLoginClick = () => {
    setShowAuth(true);
  };

  return (
    <div>
      {showAuth ? (
        <AuthContainer />
      ) : (
        <HomeContainer
          onRegisterClick={handleRegisterClick}
          onLoginClick={handleLoginClick}
        />
      )}
    </div>
  );
};

export default App;
