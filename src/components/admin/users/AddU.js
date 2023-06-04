import React, { useState } from "react";
import { createUser } from "../../../_services/user.services";

const AddU = () => {
  const [newUser, setNewUser] = useState({});

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(newUser);
      // Réinitialiser le formulaire et récupérer à nouveau les utilisateurs
      setNewUser({});
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur:", error);
    }
  };
  //
  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Add User</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group md-3">
                    <label htmlFor="">Name :</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={newUser.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group md-3">
                    <label htmlFor="">Username :</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      value={newUser.username}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group md-3">
                    <label htmlFor="">Email :</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={newUser.email}
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

export default AddU;
