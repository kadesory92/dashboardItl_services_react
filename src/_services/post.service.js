import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

// Récupérer tous les albums
export const getPosts = () => {
  return axios.get(`${API_URL}/posts`);
};

export const getListPosts = (page) => {
  return axios.get(`${API_URL}/posts?_page=${page}&_limit=8`);
};

// Récupérer un album par ID
export const getPostById = (id) => {
  return axios.get(`${API_URL}/posts/${id}`);
};

// Créer un nouvel album
export const createPost = (post) => {
  return axios.post(`${API_URL}/posts`, post);
};

// Mettre à jour un album
export const updatePost = (id, post) => {
  return axios.put(`${API_URL}/posts/${id}`, post);
};

// Supprimer un album
export const deletePost = (id) => {
  return axios.delete(`${API_URL}/posts/${id}`);
};
