import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

const auth = token => (
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

export const login = data => api.post('/sessions', data);
export const createUser = data => api.post('/users', data);
export const updateUser = (data, token) => api.put('/users', data, auth(token));
export const getCategorias = () => api.get('/categorias');
export const getProdutos = categoria => api.get('/produtos', {
  params: {
    categoria,
  },
});
// export const getCategories = () => api.get('/categorias');


export default api;
