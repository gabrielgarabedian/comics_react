import React from "react";
import { Link } from "react-router-dom";

const ContactoPage =( )=>{
    return (
        <>
          <div>
               <h1>Muestra los contactos</h1>
               <Link to="/">
                  <button>Volver al HOME</button>
               </Link>
               <Link to="/tienda">
                  <button>Ir a la Tienda</button>
               </Link>
          </div>
        </>
    );
};

export default ContactoPage;