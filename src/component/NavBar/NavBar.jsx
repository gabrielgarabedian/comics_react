import React from "react";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";




const NavBar = () => {
    return (
    <nav className="navBar">
        <h1 className="logoEmpresa"> Multiverse </h1>
        <ul className="barraNavegacion">
            <li className="contenedorPagina">
                <a href="./index.html" className="hrefNav">
                    Home
                </a>
            </li>
            <li className="contenedorPagina">
                <a href="./pages/contacto.html" className="hrefNav">
                    Contacto
                </a>
            </li>
            <li className="contenedorPagina"> 
                <a href="./pages/tienda.html" className="hrefNav">
                    Tienda
                </a>
            </li>
        <CartWidget/>
        </ul>
    </nav>);
}

export default NavBar;
