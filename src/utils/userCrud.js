import axios from 'axios';


const API_URL = 'http://localhost:8080/users';

// Create (POST)
export const createUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating item", error);
    throw error;
  }
};

// Read (GET)
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching items", error);
    throw error;
  }
};
// Read (GET) by username
export const getUser = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user", error);
    throw error;
  }
};