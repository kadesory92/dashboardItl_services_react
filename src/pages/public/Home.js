import { Link } from "react-router-dom";
import diplomateImg from '../../assets/public/images/diplomate.jpg'
import Header from "../../components/public/layouts/inc/Header";


const Home=()=>{
    return (
            <>
                <header className="py-5 mt-5">
                    <Header/>
                </header>
                <div className="section_one">
                    <section className="container my-4">
                        <h2 className="text-center mb-5"><span className="border-bottom">A qui s'adresse -t-elle?</span></h2>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <div className="card h-100 text-center">
                                <img src={diplomateImg} className="card-img-top ms-auto h-100" alt="etudiants" />
                                <div className="card-body">
                                    <h5 className="card-title">Etudiants et Doctorants Guinéens</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 text-center">
                                <img src={diplomateImg} className="card-img-top ms-auto h-100" alt="diplomate"/>
                                <div className="card-body">
                                    <h5 className="card-title">Touristes et Résidents permanents</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 text-center">
                                    <img src={diplomateImg} className="card-img-top ms-auto h-100" alt="diplomate"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Diplomates et Militaires</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <section className="pt-4 mt-3">
                        <h3 className="text-center mb-5"><span className="border-bottom">Missions diplomatiques</span></h3>
                        <div className="container px-lg-5">
                            {/* <!-- Page Features--> */}
                            <div className="row gx-lg-5">
                                <div className="col-lg-6 col-xxl-4 mb-5">
                                    <div className="card bg-light border-0 h-100">
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection"></i></div>
                                            <h2 className="fs-4 fw-bold">Représenter la Guinée</h2>
                                            <p className="mb-0">Défendre et promouvoir ses interets dans tous les domaines!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xxl-4 mb-5">
                                    <div className="card bg-light border-0 h-100">
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download"></i></div>
                                            <h2 className="fs-4 fw-bold">Travailler pour les guinéens</h2>
                                            <p className="mb-0">Administrer et protéger des guinéens Résidents en Russie!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xxl-4 mb-5">
                                    <div className="card bg-light border-0 h-100">
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-card-heading"></i></div>
                                            <h2 className="fs-4 fw-bold">Défendre les interets et la position de la Guinée</h2>
                                            <p className="mb-0">Participer à la conception et à la conduite de la politique étrangère de la Guinée en Russie!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xxl-4 mb-5">
                                    <div className="card bg-light border-0 h-100">
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-bootstrap"></i></div>
                                            <h2 className="fs-4 fw-bold">Coopération Etatique</h2>
                                            <p className="mb-0">Renforcer et dynamiser la coopération entre la Guinée et la Russie!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xxl-4 mb-5">
                                    <div className="card bg-light border-0 h-100">
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-code"></i></div>
                                            <h2 className="fs-4 fw-bold">Echange Culturelle</h2>
                                            <p className="mb-0">Promouvoir la culture guinéenne dans la Fédération de la Russie!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xxl-4 mb-5">
                                    <div className="card bg-light border-0 h-100">
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-patch-check"></i></div>
                                            <h2 className="fs-4 fw-bold">Coopération Scientifique</h2>
                                            <p className="mb-0">Accompagner les étudiants, doctorants et chercheurs guinéens en Russie!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <p className="text-center">How It happens </p> */}
                            <h3 className="text-center lh-sm fs-lg-6 fs-xxl-7 mb-5"><span className="border-bottom">Services Consulaires</span></h3>
                        </div>
                    </div>
                    <div className="row mt-6">
                        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                            <div className="theBadge badge badge-circle bg-soft-primary flex-center border">
                                <div className="badgeText text-primary fs-7 font-base">1</div>
                            </div>
                            <h5 className="text-primary text-center mt-3">Démarches Administratives </h5>
                            <p className="text-center mx-xl-7">Introduce your product, select through the pricing plan and let us know if you have any references in mind</p>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                            <div className="theBadge badge badge-circle bg-soft-warning flex-center border">
                                <div className="badgeText text-warning fs-7 font-base">2</div>
                            </div>
                            <h5 className="text-primary text-center mt-3">Affaires Sociales </h5>
                            <p className="text-center mx-xl-7">Deliver the sujects at our doorstep, we will click perfect shots in no time and make it online ready</p>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column align-items-center">
                            <div className="theBadge badge badge-circle bg-soft-success flex-center border">
                                <div className="badgeText text-success fs-7 font-base">3 </div>
                            </div>
                            <h5 className="text-primary text-center mt-3">Protection</h5>
                            <p className="text-center mx-xl-7">After the photoshoot, you will get to review the shots and let us know if there any modification needed.</p>
                        </div>
                    </div>
                    <hr className="mt-6" />
                </div>


                <div>
                    <div id="carouselExampleControls" className="carousel slide container" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active text-center">
                                <div className="card">
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                    </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="card">
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item text-center">
                                <div className="card">
                                    <img src="..." className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>  
                </div>
            </>
    )
}
export default Home;