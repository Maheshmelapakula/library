// components/auth/AuthContainer.js
import React, { useState } from 'react';
import Registration from './Registration';
import Login from './Login';

const AuthContainer = () => {
  const [activeForm, setActiveForm] = useState('registration');

  const handleFormToggle = (formType) => {
    setActiveForm(formType);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        {activeForm === 'registration' ? (
          <Registration />
        ) : (
          <Login />
        )}
        <div style={styles.formToggleContainer}>
          <button
            style={activeForm === 'registration' ? styles.activeButton : styles.button}
            onClick={() => handleFormToggle('registration')}
          >
            Register
          </button>
          <button
            style={activeForm === 'login' ? styles.activeButton : styles.button}
            onClick={() => handleFormToggle('login')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
  formToggleContainer: {
    display: 'flex',
    marginBottom: '20px',
  },
  button: {
    padding: '15px 30px',
    margin: '10px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#61dafb',
    color: '#fff',
    fontSize: '18px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  activeButton: {
    padding: '15px 30px',
    margin: '10px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '18px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  form: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
};

export default AuthContainer;
