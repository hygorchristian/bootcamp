import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gonode-desafio-node.herokuapp.com',
});

const auth = token => (
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

export const getFile = file => `https://gonode-desafio-node.herokuapp.com/files/${file.id}`;

export const getSocketUrl = () => 'ws://gonode-desafio-node.herokuapp.com';

export const login = data => api.post('/sessions', data);
export const createUser = data => api.post('/users', data);
export const getPedidos = ({ id, token }) => api.get(`/pedidos?user_id=${id}`, auth(token));
export const updateUser = (data, token) => api.put('/users', data, auth(token));
export const getCategorias = () => api.get('/categorias');
export const getProdutos = categoria => api.get('/produtos', {
  params: {
    categoria,
  },
});
export const postPedido = ({ token, data }) => api.post('/pedidos', data, auth(token));


export default api;
