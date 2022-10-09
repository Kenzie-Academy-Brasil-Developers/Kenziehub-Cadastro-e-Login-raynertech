import axios from 'axios';

const token = localStorage.getItem('@kenzieHub:token');

const Api = axios.create({
  baseURL: 'https://kenziehub.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export default Api;
