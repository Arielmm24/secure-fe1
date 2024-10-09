import axios from 'axios';
import { errorToaster, infoToaster, succesToaster } from './globalStyle'


const API_URL = 'http://localhost:8080/users';

// Create (POST)
export const createUser = async (userName,password,email,phoneNumber) => {
  try {
    const response = await axios.post(`${API_URL}/`, {
      userName,
      password,
      email,
      phoneNumber,
      isLock: 0
    });
    return response.data;
  } catch (error) {
    console.error("Error creating item", error);
    throw error;
  }
};

export const login = async (userName, password) => {
  try {
    const response = await axios.post('http://localhost:8080/login', {
      userName,
      password
    })
    const { data } = response
    if( data.message === '"Object(s) Read Successfully"'){
      return data.response;
    } else {
        return undefined
    }
  } catch (error){
    console.error("Error fetching user", error);
    return (0)
  }

} 

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
export const getUser = async (name,password) => {
  try {
    const response = await axios.get(`${API_URL}/${name}/${password}`);
    const { data } = response
    if( data.message === '"Object(s) Read Successfully"'){
      return data.response;
    } else {
        return undefined
    }
  } catch (error) {
    console.error("Error fetching user", error);
    return (0)
  }
};

// export const updateUser = async (userName, currentPassword, newPassword) => {
//   try {
//     const response = await axios.put(`${API_URL}`)
//   }

// }