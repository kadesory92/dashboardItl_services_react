import { Link } from "react-router-dom";

const Navbar=()=>{
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-light">
            
            <Link className="navbar-brand text-dark ps-3" to="/"><i className="fa-solid fa-building-flag"> ITL Dashboard</i></Link>
        
            <Link className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" to=""><i className="fas fa-bars"></i></Link>
        
            <div className="d-flex ms-auto my-2">
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4 bg-dark border border-2 rounded-5">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-user"><span className="fs-6 m-1">Sory Kourouma</span></i>
                        </Link>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="#!">Settings</Link></li>
                            <li><Link className="dropdown-item" to="#!">Activity Log</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="..."><span className="mx-1">Logout</span><i className="fa-solid fa-right-from-bracket"></i></Link></li>
                        </ul>
                    </li>
                </ul>
                <Link className="nav-link mx-2 mt-2" to="">
                <i className="fa-regular fa-folder-open"></i>
                </Link>
                <Link className="nav-link mx-4 mt-2" to="#">
                    <i className="fa-solid fa-gear"></i>
                </Link>
            </div>
            
        </nav>
    )
}

export default Navbar;