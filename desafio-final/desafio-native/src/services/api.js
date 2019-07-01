import axios from 'axios';
import { Platform } from 'react-native';

const api = axios.create({
  baseURL: Platform.select({
    ios: 'http://localhost:3333',
    android: 'http://10.0.2.2:3333',
  }),
});

const auth = token => (
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

export const getFile = (file) => {
  const base = Platform.select({
    ios: 'http://localhost:3333',
    android: 'http://10.0.2.2:3333',
  });

  return `${base}/files/${file.id}`;
};

export const login = data => api.post('/sessions', data);
export const createUser = data => api.post('/users', data);
export const getPedidos = id => api.post(`/pedidos?user_id=${id}`, data);
export const updateUser = (data, token) => api.put('/users', data, auth(token));
export const getCategorias = () => api.get('/categorias');
export const getProdutos = categoria => api.get('/produtos', {
  params: {
    categoria,
  },
});
// export const getCategories = () => api.get('/categorias');


export default api;
