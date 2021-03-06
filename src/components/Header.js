import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './styles/Header.css'

const Header = (props) => {
    return (
      <div className="headerContainer">
        <nav className="navbar navbar-light fixed-top" style={{backgroundColor:"#851835"}}>
          <div className="container-fluid">
            <a className="navbar-brand" style={{color:"#fff"}} href="/">Instituto F. Mayer</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Instituto F. Mayer</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <Link to="/" className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                  </Link>
                  <Link to="/Acercade.js" className="nav-item">
                    <a className="nav-link" href="#">Acerca</a>
                  </Link>
                  <Link to="/Galeria.js" className="nav-item">
                    <a className="nav-link" href="#">Galería</a>
                  </Link>
                  <Link to="/Inscripciones.js" className="nav-item">
                    <a className="nav-link" href="#">Inscripciones</a>
                  </Link>
                  <Link to="/Novedades.js" className="nav-item">
                    <a className="nav-link" href="#">Novedades</a>
                  </Link>
                  <Link to="#" className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Especialidades
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                      <Link><a className="dropdown-item" href="#">Economía</a></Link>
                      <Link><a className="dropdown-item" href="#">Naturales</a></Link>
                      <Link><a className="dropdown-item" href="#">Música</a></Link>
                    </ul>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Header;