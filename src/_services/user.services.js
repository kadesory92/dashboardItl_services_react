import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

// Récupérer tous les utilisateurs
export const getUsers = () => {
  return axios.get(`${API_URL}/users`);
};

// Récupérer un utilisateur par ID
export const getUserById = (id) => {
  return axios.get(`${API_URL}/users/${id}`);
};

// Créer un nouvel utilisateur
export const createUser = (user) => {
  return axios.post(`${API_URL}/users`, user);
};

// Mettre à jour un utilisateur
export const updateUser = (id, user) => {
  return axios.put(`${API_URL}/users/${id}`, user);
};

// Supprimer un utilisateur
export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/users/${id}`);
};
