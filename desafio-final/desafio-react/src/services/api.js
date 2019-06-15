import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json'
  }
});

export const performLogin = data => api.post('/sessions', data);
