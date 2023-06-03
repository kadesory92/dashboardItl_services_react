// import axios from 'axios';

// const BASE_URL="https://jsonplaceholder.typicode.com/"


// /*   
// Récupération de la liste des user
// @returns {Promise} 
//   */
// let getAllPhotos = () => {
//     return axios.get(`${BASE_URL}photos`);
// }


// /**
//  * Récupération d'un user
//  * @param {number} id, but give here 1 for exemble 
//  * @returns {Promise}
//  */
// let getPhoto = () => {
//     return axios.get(`${BASE_URL}photos/1`)
// }


// /**
//  * Ajout d'un user
//  * @param {object} photo 
//  * @returns {Promise}
//  */
// let addPhoto = (photo) => {
//     return axios.put(`${BASE_URL}photos`, photo)
// }

// /**
//  * Mise à jour d'un user
//  * @param {object} user 
//  * @returns {Promise}
//  */
// let updatePhoto = (photo) => {
//     return axios.patch(`${BASE_URL}/photos/5`, photo)
// }

// /**
//  * Suppression d'un user
//  * @param {number} id 
//  * @returns {Promise}
//  */
// let deletePhoto = (id) => {
//     return axios.delete(`${BASE_URL}/photo/`+id)
// }



// export const photoService = {
//     getAllPhotos, getPhoto, addPhoto, updatePhoto, deletePhoto
// }