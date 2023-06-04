import React, { useEffect, useState } from "react";
import { getPhototById, updatePhoto } from "../../../_services/photo.service";
import { useParams } from "react-router-dom";

const EditPhoto = () => {
  const [photo, setPhoto] = useState({
    albumId: "",
    title: "",
    url: "",
    thumbnailurl: "",
  });

  const { id } = useParams();

  useEffect(() => {
    fetchPhoto();
  }, [id]);

  const fetchPhoto = async () => {
    try {
      const res = await getPhototById(id);
      setPhoto(res.data);
    } catch (error) {}
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const data = {
      ...photo,
      [e.target.name]: e.target.value,
    };
    setPhoto(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePhoto(id, photo);
      setPhoto({
        albumId: "",
        title: "",
        url: "",
        thumbnailurl: "",
      });
    } catch (error) {
      console.error("Update error", error);
    }
  };

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Edit Photo Form</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group md-3">
                    <label htmlFor="">Album Id :</label>
                    <input
                      type="text"
                      name="albumId"
                      className="form-control"
                      value={photo.albumId}
                      disabled
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group md-3">
                    <label htmlFor="">Title :</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={photo.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group md-3">
                    <label htmlFor="">Url :</label>
                    <input
                      type="text"
                      name="url"
                      className="form-control"
                      value={photo.url}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* <div className="form-group md-3">
                    <label htmlFor="">Thumbnailurl :</label>
                    <input
                      type="text"
                      name="thumbnailurl"
                      className="form-control"
                      value={photo.thumbnailurl}
                      onChange={handleInputChange}
                    />
                  </div> */}
                  <div className="form-group md-3 mt-2">
                    <button type="submit" className="btn btn-primary w-100">
                      Update photo
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditPhoto;
