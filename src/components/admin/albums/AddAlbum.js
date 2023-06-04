import React, { useEffect, useState } from "react";
import { getUsers } from "../../../_services/user.services";
import { createAlbum } from "../../../_services/album.service";

const Adduser = () => {
  const [users, setUsers] = useState([]);
  const [album, setAlbum] = useState({
    userId: "",
    title: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des users:", error);
    }
  };

  const user = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  const handleInputChange = (e) => {
    setAlbum({ ...album, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAlbum(album);
      // Réinitialiser le formulaire et récupérer à nouveau les utilisateurs
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
                <h3>Add Album</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group md-3">
                    <label htmlFor="">User Id :</label>
                    <select
                      name="userId"
                      value={album.userId}
                      className="form-control"
                      onChange={handleInputChange}>
                      <option defaultValue>Select </option>
                      {user}
                    </select>
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
                      Inscrire
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

export default Adduser;
