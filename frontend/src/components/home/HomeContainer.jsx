// components/home/HomeContainer.js
import React from 'react';
import Home from './Home';

const HomeContainer = ({ onRegisterClick, onLoginClick }) => {
  return <Home onRegisterClick={onRegisterClick} onLoginClick={onLoginClick} />;
};

export default HomeContainer;
