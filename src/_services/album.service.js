import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

// Récupérer tous les albums
export const getAlbums = () => {
  return axios.get(`${API_URL}/albums`);
};

// Récupérer un album par ID
export const getAlbumById = (id) => {
  return axios.get(`${API_URL}/albums/${id}`);
};

// Créer un nouvel album
export const createAlbum = (album) => {
  return axios.post(`${API_URL}/albums`, album);
};

// Mettre à jour un album
export const updateAlbum = (id, album) => {
  return axios.put(`${API_URL}/albums/${id}`, album);
};

// Supprimer un album
export const deleteAlbum = (id) => {
  return axios.delete(`${API_URL}/albums/${id}`);
};
