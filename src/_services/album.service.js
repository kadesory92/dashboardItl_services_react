import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

// Récupérer tous les utilisateurs
export const getAlbums = () => {
  return axios.get(`${API_URL}/albums`);
};

// Récupérer un utilisateur par ID
export const getAlbumById = (id) => {
  return axios.get(`${API_URL}/albums/${id}`);
};

// Créer un nouvel utilisateur
export const createAlbum = (album) => {
  return axios.post(`${API_URL}/albums`, album);
};

// Mettre à jour un utilisateur
export const updateAlbum = (id, album) => {
  return axios.put(`${API_URL}/albums/${id}`, album);
};

// Supprimer un utilisateur
export const deleteAlbum = (id) => {
  return axios.delete(`${API_URL}/albums/${id}`);
};
