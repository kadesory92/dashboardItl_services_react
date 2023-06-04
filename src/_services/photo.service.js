import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

// Récupérer tous les photos
export const getListPhotos = (page) => {
  return axios.get(`${API_URL}/photos?_page=${page}&_limit=8`);
};

export const getPhotos = () => {
  return axios.get(`${API_URL}/photos`);
};

// Récupérer un photo par ID
export const getPhototById = (id) => {
  return axios.get(`${API_URL}/photos/${id}`);
};

// Créer une nouvelle photo
export const createPhoto = (photo) => {
  return axios.post(`${API_URL}/photos`, photo);
};

// Mettre à jour un photo
export const updatePhoto = (id, photo) => {
  return axios.put(`${API_URL}/photos/${id}`, photo);
};

// Supprimer un photo
export const deletePhoto = (id) => {
  return axios.delete(`${API_URL}/photos/${id}`);
};
