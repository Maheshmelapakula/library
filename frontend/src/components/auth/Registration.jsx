// components/auth/Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Registration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    studentID: '',
    department: '',
    role:'',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      await authService.register(formData);
      console.log('Registration successful');
      navigate('/');
    } catch (error) {
      console.error('Registration failed', error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Registration</h2>
      <form onSubmit={handleRegistration} style={styles.form}>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Student ID:
          <input
            type="text"
            name="studentID"
            value={formData.studentID}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Role:
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.submitButton}>
          Register
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
    alignItems: 'center', // Align the form items in the center
  },
  label: {
    marginBottom: '10px',
    fontSize: '16px',
    color: '#495057',
    width: '100%',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ced4da',
    borderRadius: '5px',
    backgroundColor: '#fff',
    width: '100%',
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
    width: '100%',
  },
};

export default Registration;
