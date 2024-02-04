import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Login = () => {
  const [loginData, setLoginData] = useState({
    studentId: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin =  (e) => {
    e.preventDefault();

    // console.log('Login data:', loginData);

    authService.login(loginData);
    // try {
    //   console.log('Login successful');
    //   // navigate('/books'); // Redirect to BooksPage after successful login
    // } catch (error) {
    //   console.error('Login failed', error.message);
    //   alert('Login failed. Please check your credentials.');
    // }
  };


  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <label style={styles.label}>
          StudentID:
          <input
            type="text"
            name="studentId" // Match the name with your backend field
            value={loginData.studentId}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </label>
        <br />
        <button type="submit" style={styles.submitButton}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f9fa',
  },
  heading: {
    color: '#007bff',
    fontSize: '28px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    fontSize: '16px',
    color: '#495057',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ced4da',
    borderRadius: '5px',
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '15px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '15px',
    border: 'none',
  },
};

export default Login;
