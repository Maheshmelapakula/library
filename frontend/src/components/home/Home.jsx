// components/home/Home.js
import React, { useState } from 'react';
import Registration from '../auth/Registration';
import Login from '../auth/Login';

const Home = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleRegisterClick = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to Your Online Library</h2>
      <p style={styles.text}>
        Explore the amazing features of our platform. If you are new, register here. Otherwise, login.
      </p>
      {showRegisterForm && <Registration />}
      {showLoginForm && <Login />}
      <div style={styles.buttonsContainer}>
        <button style={styles.registerButton} onClick={handleRegisterClick}>
          Register
        </button>
        <span style={styles.textSeparator}>or</span>
        <button style={styles.loginButton} onClick={handleLoginClick}>
          Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#007bff',
    fontSize: '36px',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  text: {
    fontSize: '18px',
    marginBottom: '30px',
    color: '#555',
    lineHeight: '1.6',
  },
  registerButton: {
    padding: '15px 30px',
    margin: '10px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#4caf50', // Green color
    color: '#fff',
    fontSize: '18px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  loginButton: {
    padding: '15px 30px',
    margin: '10px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#007bff', // Blue color
    color: '#fff',
    fontSize: '18px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  textSeparator: {
    margin: '0 10px',
    color: '#555',
    fontSize: '18px',
  },
  buttonsContainer: {
    display: 'flex',
  },
};

export default Home;
