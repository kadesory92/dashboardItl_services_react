import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

// Récupérer tous les utilisateurs
export const getPosts = () => {
  return axios.get(`${API_URL}/posts`);
};

// Récupérer un utilisateur par ID
export const getPostById = (id) => {
  return axios.get(`${API_URL}/posts/${id}`);
};

// Créer un nouvel utilisateur
export const createPost = (album) => {
  return axios.post(`${API_URL}/posts`, album);
};

// Mettre à jour un utilisateur
export const updatePost = (id, album) => {
  return axios.put(`${API_URL}/posts/${id}`, album);
};

// Supprimer un utilisateur
export const deletePost = (id) => {
  return axios.delete(`${API_URL}/posts/${id}`);
};
