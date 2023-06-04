import axios from "axios";
import React, { useEffect, useState } from "react";
import { getAlbums } from "../../../_services/album.service";
import { createPhoto } from "../../../_services/photo.service";

const ModalAddPhoto = () => {
  const [albums, setAlbums] = useState([]);
  const [dataForm, setDataForm] = useState({
    albumId: "",
    title: "",
    url: "",
    thumbnailurl: "",
  });

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await getAlbums();
      setAlbums(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des photos:", error);
    }
  };

  const album = albums.map((album) => (
    <option value={album.id} key={album.id}>
      {album.title}
    </option>
  ));

  const handleChange = (e) => {
    const data = {
      ...dataForm,
      [e.target.name]: e.target.value,
    };
    setDataForm(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPhoto(dataForm);
      // Réinitialiser le formulaire et récupérer à nouveau les photos
      setDataForm({
        albumId: "",
        title: "",
        url: "",
        thumbnailurl: "",
      });
    } catch (error) {
      console.error("Erreur lors de la création de l'photo:", error);
    }
  };

  return (
    <div>
      <div className="container p-3 d-flex ms-0">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          Add Photo
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title text-success text-center"
                  id="exampleModalLabel">
                  Add Photo
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Album Id
                    </label>
                    <select
                      name="albumId"
                      value={dataForm.albumId}
                      className="form-control"
                      onChange={handleChange}>
                      <option defaultValue>Select </option>
                      {album}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={dataForm.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="url" className="form-label">
                      URL
                    </label>
                    <input
                      type="url"
                      name="url"
                      value={dataForm.url}
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="thumbnailurl" className="form-label">
                      Thumbnail Url
                    </label>
                    <input
                      type="url"
                      name="thumbnailurl"
                      value={dataForm.thumbnailurl}
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddPhoto;
