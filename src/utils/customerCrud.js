import axios from 'axios';


const API_URL = 'http://localhost:8080/customers';

// Create (POST)
export const addCustomer = async (name, number, amount, createdBy) => {
  try {
    const response = await axios.post(`${API_URL}/`, {
      name,
      number,
      amount,
      createdBy
    });
    return response.data;
  } catch (error) {
    console.error("Error creating item", error);
    throw error;
  }
};

// Read (GET)
export const getCustomers = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching items", error);
    throw error;
  }
};
// Read (GET) by username
export const getCustomersByName = async (name,option) => {
  try {
    const response = await axios.get(`${API_URL}/${name}/${option}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user", error);
    throw error;
  }
};