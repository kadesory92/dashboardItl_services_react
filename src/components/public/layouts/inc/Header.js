import React from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    return (
        <>
            <header className="py-5">
                <div className="container px-lg-5">
                    <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                        <div className="m-4 m-lg-5 header">
                            <h1 className="display-5 fw-bold">Ambassade de Guinée en Russie </h1>
                            <h4 className="display-10">Ministère des Affaires Etrangères</h4>
                            <p className="fs-4"><em>Plateforme de Registre des Ressortissants Guinéens en Russie</em></p>
                            <Link className="btn btn-primary btn-lg mx-2 slideInLeft" to="/register"><i className="bi bi-person-plus-fill mx-2"></i>Inscription</Link>
                            <Link className="btn btn-success btn-lg mx-2 slideInRight" to="/login"><i className="bi bi-bag-check mx-2"></i>Connexion</Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;