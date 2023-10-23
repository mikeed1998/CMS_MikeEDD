import React from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Header() {

    return (
        <div>
            <header className="menu-grande py-3" style={{ backgroundColor: "white" }}>
            <div className="row mt-0">
                <div className="col-10 mx-auto bg-white mt-3 shadow rounded-pill">
                    <div className="row">
                        <div className="col header-btn d-flex align-content-center justify-content-center fs-5 fw-bolder text-center">
                           <Link to="/home" className="py-4" style={{ textDecoration: "none" }}>Inicio</Link>
                        </div>
                        <div className="col header-btn d-flex align-content-center justify-content-center fs-5 fw-bolder text-center">
                            <Link to="/home" className="py-4" style={{ textDecoration: "none" }}>Portafolio</Link>
                        </div>
                        <div className="col header-btn d-flex align-content-center justify-content-center fs-5 fw-bolder text-center">
                            <Link to="/home" className="py-4" style={{ textDecoration: "none" }}>Experiencia</Link>
                        </div>
                        <div className="col-2 header-btn d-flex align-content-center justify-content-center fs-5 fw-bolder text-center">
                            <Link to="/aboutus" className="py-4" style={{ textDecoration: "none" }}>Sobre mi</Link>
                        </div>
                        <div className="col header-btn d-flex align-content-center justify-content-center fs-5 fw-bolder text-center">
                            <Link to="/home" className="py-4" style={{ textDecoration: "none" }}>Cursos</Link>
                        </div>
                        <div className="col header-btn d-flex align-content-center justify-content-center fs-5 fw-bolder text-center">
                            <Link to="/home" className="py-4" style={{ textDecoration: "none" }}>Inicio</Link>
                        </div>
                        <div className="col header-btn d-flex align-content-center justify-content-center fs-5 fw-bolder text-center">
                            <Link to="/contacto" className="py-4" style={{ textDecoration: "none" }}>Contacto</Link>
                        </div>
                        <div className="col bg-white fs-5 fw-normal d-flex align-content-center justify-content-center text-success text-center rounded-end-pill">
                            <div className="dropdown">
                                <button className="btn border-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ boxShadow: "none" }}>
                                    <div className="row">
                                        <div className="col text-center py-3 fs-5" style={{ color: "#E30920" }}>
                                            <img src="img/header/usuario.png" alt="" className="img-fluid w-25"/>Usuario
                                        </div>
                                    </div>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item fs-5" to="/home" style={{ color: "#E30920" }}>Ingresar</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item fs-5" to="/home" style={{ color: "#E30920" }}>Resgistrarse</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>    
            </div>
        </header>   

        <header className="menu-movil">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-12 col-12 fs-3 text-center">
                    <div className="boton-md">
                        <img src="img/home/logo.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="boton-xs">
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 col-12 text-center">
                 
                    <div className="boton-md">
                        <button className="btn btn-outline border-dark mt-md-4 mt-sm-4 mt-xs-4 mt-0" data-bs-toggle="collapse" data-bs-target="#miColapso"><FontAwesomeIcon icon={faBars} size='2x' /></button>
                    </div>
                    <div className="boton-xs">
                        <button className="btn-link btn-outline border-0 mt-md-4 mt-sm-4 mt-xs-4 mt-0 py-3" data-bs-toggle="collapse" data-bs-target="#miColapso" style={{ textDecoration: "none" }}><FontAwesomeIcon icon={faBars} size='3x' /></button>
                    </div>
                    
                </div>
                <div className="col-12">
                    
                    <div id="miColapso" className="collapse">
                        <div className="row mt-2 mb-2">
                            <div className="col-md-3 col-sm-2 col-xs-2 col-2"></div>
                            <div className="col-md-9 col-sm-10 col-xs-10 col-10 bg-white" style={{ borderTopLeftRadius: '36px', borderBottomLeftRadius: '36px' }}>
                                <div className="row">
                                    <div className="col-12 header-btn_movil fs-3 fw-bolder py-3 text-center">
                                        <Link to="/home" className="py-4" style={{ textDecoration: "none" }}>Inicio</Link>
                                    </div>
                                    <div className="col-12 header-btn_movil fs-3 fw-bolder py-3 text-center">
                                        <Link to="/home" className="py-4" style={{ textDecoration: "none" }}>Portafolio</Link>
                                    </div>
                                    <div className="col-12 header-btn_movil fs-3 fw-bolder py-3 text-center">
                                        <Link to="/home" className="py-4" style={{ textDecoration: "none" }}>Experiencia</Link>
                                    </div>
                                    <div className="col-12 header-btn_movil fs-3 fw-bolder py-3 text-center">
                                        <Link to="/home" className="py-4" style={{ textDecoration: "none" }}>Sobre mi</Link>
                                    </div>
                                    <div className="col-12 header-btn_movil fs-3 fw-bolder py-3 text-center">
                                        <Link to="/home" className="py-4" style={{ textDecoration: "none" }}>Cursos</Link>
                                    </div>
                                    <div className="col-12 header-btn_movil fs-3 fw-bolder py-3 text-center">
                                        <Link to="/home" className="py-4" style={{ textDecoration: "none" }}>Inicio</Link>
                                    </div>
                                    <div className="col-12 header-btn_movil fs-3 fw-bolder py-3 text-center">
                                        <Link to="/contacto" className="py-4" style={{ textDecoration: "none" }}>Contacto</Link>
                                    </div>
                                    <div className="col fw-normal py-3 text-success text-center">
                               
                                        <div className="dropdown">
                                            <button className="btn border-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ boxShadow: "none" }}>
                                                <div className="row">
                                                    <div className="col text-center fs-3" style={{ color: "#E30920" }}>
                                                        <img src="img/header/usuario.png" alt="" className="img-fluid"/>Usuario
                                                    </div>
                                                </div>
                                            </button>
                                            <ul className="dropdown-menu">
                                        {/* <li><a className="dropdown-item fs-5" href="login.php" style="color: #E30920;">Ingresar</a></li>
                                        <li><a className="dropdown-item fs-5" href="register.php" style="color: #E30920;">Resgistrarse</a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>  
        </div>
    );
}

export default Header;

