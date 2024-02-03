// services/authService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5050'; // Replace with your actual API endpoint

const authService = {
  register: async (formData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, formData);
      if (response.status !== 200) {
        throw new Error('Registration failed');
      }
    } catch (error) {
      throw new Error('Registration failed');
    }
  },

  login: async (loginData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, loginData);
      if (response.status !== 200) {
        throw new Error('Login failed');
      }
    } catch (error) {
      throw new Error('Login failed');
    }
  },
};

export default authService;
