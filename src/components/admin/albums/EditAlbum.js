import React, { useEffect, useState } from "react";
import { getAlbumById, updateAlbum } from "../../../_services/album.service";
import { useParams } from "react-router-dom";

const EditAlbum = () => {
  let album_id = useParams();

  const [album, setAlbum] = useState({
    userId: "",
    title: "",
  });

  useEffect(() => {
    fetchAlbum();
  }, []);

  const fetchAlbum = async () => {
    try {
      const res = await getAlbumById(album_id);
      console.log(res.data);
      setAlbum(res.data);
    } catch (error) {
      console.error("Erreur de chargement de l'album", error);
    }
  };

  const handleInputChange = (e) => {
    setAlbum({ ...album, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAlbum(album_id, album);
      // Réinitialiser le formulaire et récupérer à nouveau les album
      setAlbum({
        userId: "",
        title: "",
      });
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur:", error);
    }
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Edit Album Form</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group md-3">
                    <label htmlFor="">User Id :</label>
                    <input
                      type="text"
                      name="userId"
                      className="form-control"
                      value={album.userId}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group md-3">
                    <label htmlFor="">Title :</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={album.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group md-3 mt-2">
                    <button type="submit" className="btn btn-primary w-100">
                      Edit Album
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAlbum;
