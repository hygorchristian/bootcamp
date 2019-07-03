import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gonode-desafio-node.herokuapp.com',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json'
  }
});

export const getFile = (file) => `https://gonode-desafio-node.herokuapp.com/files/${file.id}`;

export const performLogin = data => api.post('/sessions', data);

export const fetchOrders = token => api.get('/pedidos', {
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const putOrder = ({ id, status, token }) => api.put(`/pedidos/${id}`, { status }, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
