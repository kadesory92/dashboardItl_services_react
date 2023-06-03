import React, { useState } from 'react';

const RegistrationModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique pour envoyer les données d'inscription
    console.log('Prénom:', firstName);
    console.log('Nom:', lastName);
    console.log('Email:', email);
    // Fermer le modal après la soumission
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        Ouvrir le formulaire d'inscription
      </button>

      {modalOpen && (
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Formulaire d'inscription</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Prénom</label>
                    <input type="text" className="form-control" id="firstName" value={firstName} onChange={handleFirstNameChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="lastName" value={lastName} onChange={handleLastNameChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
                  </div>
                  <button type="submit" className="btn btn-primary">S'inscrire</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationModal;
