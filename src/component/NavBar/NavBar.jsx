import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
    <nav className="navBar">
        <Link to="/" className="logoEmpresa"> Multiverse </Link>
        <ul className="barraNavegacion">
            <Link to="/" className="contenedorPagina">Home</Link>
            <Link to="/contacto" className="contenedorPagina">Contacto</Link>
            <Link to="/tienda" className="contenedorPagina">Tienda</Link>
            <CartWidget/>
        </ul>
    </nav>);
}

export default NavBar;
