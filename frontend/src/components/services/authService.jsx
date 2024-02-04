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
      else{
        alert("Registration successfull")
        window.location.href = '/books';
      }
    } catch (error) {
      throw new Error('Registration failed');
    }
  },

  login:  (loginData) => {
    axios.post(`${API_BASE_URL}/login`, loginData).then((response) => {
      if (response.data.status === "Sucuss") {
        // Login successful, navigate to the Books page
        // You can replace the window.location.href with your preferred navigation method
        window.location.href = '/books';
      }
      else if(response.data.status === "NotFound"){
        alert("User not found");

      } else {
        // Login failed
       alert("Invalid credentials");
      }
    
    })
    .catch((error) => {
      // Handle error or throw a specific error message
      alert("somtyhing went worng")
    })
    
  //   try {
  //     // console.log(loginData);
  //     const response =  axios.post(`${API_BASE_URL}/login`, loginData);
  //     const data = response.json()
  //     console.log(data);
  //     console.log(data.data.data.status,"responsedata");

  //     if (response.data.data.status=== "Sucuss") {
  //       // Login successful, navigate to the Books page
  //       // You can replace the window.location.href with your preferred navigation method
  //       window.location.href = '/books';
        
  //     }
  //     else if(data.data.data.status==="NotFound"){
  //       alert("User not found");

  //     } else {
  //       // Login failed
  //       throw new Error('Login failed');
        
  //     }
  //   } catch (error) {
  //     // Handle error or throw a specific error message
  //     throw new Error('Login failed');
  //   }
   },
};

export default authService;
