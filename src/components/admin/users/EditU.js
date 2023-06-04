import React, { useEffect, useState } from "react";
import { getUserById, updateUser } from "../../../_services/user.services";
import { useParams } from "react-router-dom";

const UEdit = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  let { uid } = useParams();

  const handleInputChange = (e) => {
    const data = {
      ...user,
      [e.target.name]: e.target.value,
    };
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, [uid]);

  const fetchUser = async () => {
    try {
      const response = await getUserById(uid);
      setUser(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des utilisateurs:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name: user.name,
        username: user.username,
        email: user.email,
      };
      await updateUser(uid, data);
      // Réinitialiser le formulaire et récupérer à nouveau les utilisateurs
      setUser({
        name: "",
        username: "",
        email: "",
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
                <h3>Inscription</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group md-3">
                    <label htmlFor="">Name :</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={user.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group md-3">
                    <label htmlFor="">Username :</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      value={user.username}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group md-3">
                    <label htmlFor="">Email :</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={user.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group md-3 mt-2">
                    <button type="submit" className="btn btn-primary w-100">
                      Update User
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

export default UEdit;
