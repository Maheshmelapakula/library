import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import AuthContainer from './components/auth/AuthContainer';
import BooksPage from './components/pages/BookPage';

const App = () => {
  const [showAuth, setShowAuth] = useState(false);

  const handleRegisterClick = () => {
    setShowAuth(true);
  };

  const handleLoginClick = () => {
    setShowAuth(true);
  };

  return (
    
      <Routes>
        <Route
          path="/"
          element={
            showAuth ? (
              <AuthContainer />
            ) : (
              <HomeContainer
                onRegisterClick={handleRegisterClick}
                onLoginClick={handleLoginClick}
              />
            )
          }
        />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
  
  );
};

export default App;
