import axios from 'axios';

const BASE_URL = 'https://64419562fadc69b8e0879b9c.mockapi.io';

export const fetchAll = async page => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUsers = async page => {
  try {
    const response = await axios.get(`${BASE_URL}/users?page=${page}&limit=3`);

    return response;
  } catch (error) {
    console.error(error);
  }
};
