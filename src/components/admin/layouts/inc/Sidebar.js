import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion text-dark sb-sidenav-dark bg-primary"
          id="sidenavAccordion">
          <div className="sb-sidenav-menu">
            <div className="nav">
              <Link className="nav-link" to="/">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Home
              </Link>
              <Link className="nav-link" to="/admin/dashboard">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                Dashboard
              </Link>
              <Link className="nav-link" to="/admin/users">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                User
              </Link>
              {/* <div className="sb-sidenav-menu-heading">Interface</div> */}
              <Link
                className="nav-link collapsed"
                to="/admin/posts"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-columns"></i>
                </div>
                Posts Management
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down"></i>
                </div>
              </Link>
              <div
                className="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link" to="/admin/posts/add">
                    Add Post
                  </Link>
                  <Link className="nav-link" to="/admin/posts">
                    List of posts
                  </Link>

                  <Link className="nav-link" to="/admin/comments">
                    Show comments
                  </Link>
                </nav>
              </div>

              <Link
                className="nav-link collapsed"
                to="/admin/albums"
                data-bs-toggle="collapse"
                data-bs-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts">
                <div className="sb-nav-link-icon">
                  <i class="bi bi-journal-album"></i>
                </div>
                Albums Management
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down"></i>
                </div>
              </Link>
              <div
                className="collapse"
                id="collapseLayouts"
                aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion">
                <nav className="sb-sidenav-menu-nested nav">
                  <Link className="nav-link" to="/admin/albums/add">
                    Add Album
                  </Link>
                  <Link className="nav-link" to="/admin/albums">
                    List of Albums
                  </Link>
                </nav>
              </div>

              <Link
                className="nav-link collapsed"
                to="#"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapsePages">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                Pages
                <div className="sb-sidenav-collapse-arrow">
                  <i className="fas fa-angle-down"></i>
                </div>
              </Link>
              <div
                className="collapse"
                id="collapsePages"
                aria-labelledby="headingTwo"
                data-bs-parent="#sidenavAccordion">
                <nav
                  className="sb-sidenav-menu-nested nav accordion"
                  id="sidenavAccordionPages">
                  <Link
                    className="nav-link collapsed"
                    to="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#pagesCollapseAuth"
                    aria-expanded="false"
                    aria-controls="pagesCollapseAuth">
                    Authentication
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </Link>
                  <div
                    className="collapse"
                    id="pagesCollapseAuth"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordionPages">
                    <nav className="sb-sidenav-menu-nested nav">
                      <Link className="nav-link" to="login.html">
                        Login
                      </Link>
                      <Link className="nav-link" to="register.html">
                        Register
                      </Link>
                      <Link className="nav-link" to="password.html">
                        Forgot Password
                      </Link>
                    </nav>
                  </div>
                  <Link
                    className="nav-link collapsed"
                    to="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#pagesCollapseError"
                    aria-expanded="false"
                    aria-controls="pagesCollapseError">
                    Error
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </Link>
                  <div
                    className="collapse"
                    id="pagesCollapseError"
                    aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordionPages">
                    <nav className="sb-sidenav-menu-nested nav">
                      <Link className="nav-link" to="401.html">
                        401 Page
                      </Link>
                      <Link className="nav-link" to="404.html">
                        404 Page
                      </Link>
                      <Link className="nav-link" to="500.html">
                        500 Page
                      </Link>
                    </nav>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
